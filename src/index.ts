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
  for (const chainInfo of chainInfoArray) {
    const { chains } = chainInfo;
    const zkchainIds = Object.keys(chains);
    for (const zkchainId of zkchainIds) {
      const rpcinfo = chainsConfig[zkchainId];
      const provider = new ethers.JsonRpcProvider(rpcinfo.url);
      const signer = new ethers.Wallet(PRIVATE_KEY, provider);
      const tokenInfo = chainInfo.chains[zkchainId];
      if (tokenInfo.address != ignoreAddress) {
        const contract = new ethers.Contract(
          tokenInfo.address,
          ERC20_ABI,
          signer
        );

        // transfer
        const chainInfo = chainsConfig[zkchainId];
        const brokerAddress = chainInfo.brokerAddress;
        const amount = new BigNumber(1000000)
          .multipliedBy(new BigNumber(1).pow(tokenInfo.decimals))
          .toString(10);
        if (brokerAddress) {
          try {
            const transferTx = await contract.transfer(brokerAddress, amount);
            await transferTx.wait();
            logger.info(
              `transfer success: chainName: ${chainInfo.name} chainId: ${chainInfo.chainId} hash: ${transferTx.hash} brokerAddress: ${brokerAddress} amount: ${amount}`
            );
          } catch (error) {
            logger.info(
              `transfer failed: chainName: ${chainInfo.name} chainId: ${chainInfo.chainId}`
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
              `approveZkLink Success: chainName: ${chainInfo.name} chainId: ${chainInfo.chainId} hash: ${approveTx.hash} spender: ${brokerAddress} amount: ${MaxUint256}`
            );
          } catch (error) {
            logger.info(
              `approveZkLink Failed: chainName: ${chainInfo.name} chainId: ${chainInfo.chainId}`
            );
          }
        }
      }
    }
  }
}

start();
