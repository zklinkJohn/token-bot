import dotenv from "dotenv";
dotenv.config({});
import logger from "../logger";

import ERC20_ABI from "./abis/erc20.abi.json";
import BROKER_ABI from "./abis/broker.abi.json";
import FAUCET_ABI from "./abis/faucet.abi.json";

import { Contract, ethers } from "ethers";
import BigNumber from "bignumber.js";

import tokens from "./newTokenList.json";
import { chains as chainsConfig } from "./networks";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const ignoreAddress = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

const allowanceConfig = {
  BUSD: "1000",
  USDC: "1000",
  USDT: "1000",
  wETH: "0.5",
  wBTC: "0.05",
  wMATIC: "2000",
  wAVAX: "100",
  wLDO: "500",
  wBNB: "5",
};

async function setMintAllowance() {
  // const chainIds = Object.keys(chainsConfig);
  const chainIds = ["9"];
  for (const chainId of chainIds) {
    const chainInfo = chainsConfig[chainId];
    const tokensOfCurrentChain = tokens.filter(
      (item) => Number(item.chainId) === Number(chainId)
    );
    const tokenIds = [];
    const mintAllowance = [];
    for (const tokenInfo of tokensOfCurrentChain) {
      const allowance = allowanceConfig[tokenInfo.symbol] || 1000;
      const amount = new BigNumber(allowance)
        .multipliedBy(new BigNumber(10).pow(tokenInfo.decimals))
        .toString(10);
      tokenIds.push(ethers.toBeHex(tokenInfo.tokenId));
      mintAllowance.push(amount);
    }

    const provider = new ethers.JsonRpcProvider(chainInfo.url);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);
    const faucetContract = new Contract(
      chainInfo.faucetAddress,
      FAUCET_ABI,
      signer
    );

    try {
      console.log("tokenIds---mintAllowance", tokenIds, mintAllowance);
      const tx = await faucetContract.updateMintAllowance(
        tokenIds,
        mintAllowance
      );
      logger.info(
        `updateMintAllowance success: name: ${chainInfo.name} chainId: ${chainInfo.chainId} faucet: ${chainInfo.faucetAddress} hash: ${tx.hash}`
      );
      await tx.wait();
    } catch (error) {
      console.log({ error });
      logger.error(
        `updateMintAllowance failed: name: ${chainInfo.name} chainId: ${chainInfo.chainId} faucet: ${chainInfo.faucetAddress}`
      );
    }
  }
}

setMintAllowance();
