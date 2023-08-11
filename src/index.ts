import dotenv from "dotenv";
dotenv.config({});
import logger from "../logger";

import ERC20_ABI from "./abis/erc20.abi.json";
import BROKER_ABI from "./abis/broker.abi.json";

import { Contract, ethers, MaxUint256 } from "ethers";
import BigNumber from "bignumber.js";

import tokens from "./tokens.json";
import { chains as chainsConfig } from "./networks";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const ignoreAddress = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

async function start() {
  logger.info("start running ...");
  const chainInfoArray = Object.values(tokens.result);
  for (const tokenWithChainInfo of chainInfoArray) {
    const { chains } = tokenWithChainInfo;
    const zkchainIds = Object.keys(chains);
    for (const zkchainId of zkchainIds) {
      const rpcinfo = chainsConfig[zkchainId];
      const provider = new ethers.JsonRpcProvider(rpcinfo.url);
      const signer = new ethers.Wallet(PRIVATE_KEY, provider);
      const tokenInfo = tokenWithChainInfo.chains[zkchainId];
      if (tokenInfo.address != ignoreAddress) {
        const contract = new ethers.Contract(
          tokenInfo.address,
          ERC20_ABI,
          signer
        );
        const chainInfo = chainsConfig[zkchainId];

        // check balance
        const amount = new BigNumber(1000000)
          .multipliedBy(new BigNumber(1).pow(tokenInfo.decimals))
          .toString(10);

        const balance = await contract.balanceOf(signer.address);
        if (
          balance.toString() === "0" ||
          new BigNumber(balance).lt(new BigNumber(amount))
        ) {
          logger.error(
            `balance eq 0: chainName: ${chainInfo.name} chainId: ${
              chainInfo.chainId
            } token: ${
              tokenWithChainInfo.symbol
            } balance: ${balance.toString()}`
          );
          continue;
        }

        // transfer
        const brokerAddress = chainInfo.brokerAddress;
        if (brokerAddress) {
          try {
            const transferTx = await contract.transfer(brokerAddress, amount);
            await transferTx.wait();
            logger.info(
              `transfer ${tokenWithChainInfo.symbol} success: chainName: ${chainInfo.name} chainId: ${chainInfo.chainId} hash: ${transferTx.hash} brokerAddress: ${brokerAddress} amount: ${amount}`
            );
          } catch (error) {
            logger.info(
              `transfer ${tokenWithChainInfo.symbol} failed: chainName: ${chainInfo.name} chainId: ${chainInfo.chainId}`
            );
          }

          // approve
          const brokerContract = new Contract(
            brokerAddress,
            BROKER_ABI,
            signer
          );

          try {
            const approveTx = await brokerContract.approveZkLink(
              tokenInfo.address,
              MaxUint256
            );
            await approveTx.wait();
            logger.info(
              `approveZkLink ${tokenWithChainInfo.symbol} Success: chainName: ${chainInfo.name} chainId: ${chainInfo.chainId} hash: ${approveTx.hash} spender: ${brokerAddress} amount: ${MaxUint256}`
            );
          } catch (error) {
            logger.info(
              `approveZkLink ${tokenWithChainInfo.symbol} Failed: chainName: ${chainInfo.name} chainId: ${chainInfo.chainId}`
            );
          }
        }
      }
    }
  }
}

start();
