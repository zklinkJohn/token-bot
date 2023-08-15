import dotenv from "dotenv";
dotenv.config({});
import logger from "../logger";

import ERC20_ABI from "./abis/erc20.abi.json";

import { Contract, ethers } from "ethers";
import BigNumber from "bignumber.js";

import tokens from "./newTokenList.json";
import { chains as chainsConfig } from "./networks";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const ignoreAddress = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

async function transferTokenToFaucet() {
  const chainIds = Object.keys(chainsConfig);
  for (const chainId of chainIds) {
    const chainInfo = chainsConfig[chainId];
    const tokensOfCurrentChain = tokens.filter(
      (item) => Number(item.chainId) === Number(chainId)
    );
    for (const tokenInfo of tokensOfCurrentChain) {
      if (tokenInfo.contractAddress === ignoreAddress) continue;

      const provider = new ethers.JsonRpcProvider(chainInfo.url);
      const signer = new ethers.Wallet(PRIVATE_KEY, provider);
      const contract = new Contract(
        tokenInfo.contractAddress,
        ERC20_ABI,
        signer
      );

      // check balance
      const amount = new BigNumber(1000000)
        .multipliedBy(new BigNumber(10).pow(tokenInfo.decimals))
        .toString(10);

      const balance = await contract.balanceOf(signer.address);
      if (
        balance.toString() === "0" ||
        new BigNumber(balance).lt(new BigNumber(amount))
      ) {
        logger.error(
          `balance eq 0: chainName: ${chainInfo.name} chainId: ${
            chainInfo.chainId
          } token: ${tokenInfo.symbol} balance: ${balance.toString()}`
        );
        continue;
      }

      try {
        const tx = await contract.transfer(chainInfo.faucetAddress, amount);
        logger.info(
          `transfer ${tokenInfo.symbol} to faucet success: name: ${chainInfo.name} amount: ${amount} symble: ${tokenInfo.symbol} faucet: ${chainInfo.faucetAddress} hash: ${tx.hash}`
        );
      } catch (error) {
        logger.error(
          `transfer ${tokenInfo.symbol} to faucet failed: name: ${chainInfo.name} chainId: ${chainInfo.chainId} faucet: ${chainInfo.faucetAddress}`
        );
      }
    }
  }
}

transferTokenToFaucet();
