export const zklinkChainIds = {
  "4": "goerli",
  "5": "zksync-era-testnet",
  "7": "linea-testnet",
  "3": "bsc-testnet",
  "1": "polygon-testnet",
  "2": "avax-testnet", //
  "9": "arbitrum-testnet",
  "10": "optimism-testnet",
  "11": "base-testnet",
  "12": "mantle-testnet",
  "13": "manta-testnet",
  "14": "taiko-testnet",
};

interface IChainInfo {
  name: string;
  url: string;
  chainId: number;
  brokerAddress: string;
}

export const chains: { [chainName: string]: IChainInfo } = {
  "2": {
    name: "avax-testnet",
    url: "https://rpc.ankr.com/avalanche_fuji",
    chainId: 43113,
    brokerAddress: "0x650844B44628bA2b11e88A71772d5FE4512E0463",
  },
  "1": {
    name: "polygon-testnet",
    url: "https://rpc.ankr.com/polygon_mumbai",
    chainId: 80001,
    brokerAddress: "0xdbA72d5d26823F0E92FacDE8b3CE4f9897595f35",
  },
  "3": {
    name: "bsc-testnet",
    url: "https://bsc-testnet.publicnode.com",
    chainId: 97,
    brokerAddress: "0xdbA72d5d26823F0E92FacDE8b3CE4f9897595f35",
  },
  "4": {
    name: "goerli",
    url: "https://rpc.ankr.com/eth_goerli",
    chainId: 5,
    brokerAddress: "0xdbA72d5d26823F0E92FacDE8b3CE4f9897595f35",
  },
  "5": {
    name: "zksync-era-testnet",
    url: "https://testnet.era.zksync.dev",
    chainId: 280,
    brokerAddress: "0x4B75b37d97Af27e08345aB12725e53a8C3103970",
  },
  "7": {
    name: "linea-testnet",
    url: "https://rpc.goerli.linea.build",
    chainId: 59140,
    brokerAddress: "0xdbA72d5d26823F0E92FacDE8b3CE4f9897595f35",
  },
  "9": {
    name: "arbitrum-testnet",
    url: "https://arbitrum-goerli.publicnode.com",
    chainId: 421613,
    brokerAddress: "0xdbA72d5d26823F0E92FacDE8b3CE4f9897595f35",
  },
  "10": {
    name: "optimism-testnet",
    url: "https://optimism-goerli.publicnode.com",
    chainId: 420,
    brokerAddress: "0xBcA5eE50B8F2679aa7281fD48817679b82D1c4DF", // TODO:
  },
  "11": {
    name: "base-testnet",
    url: "https://base-goerli.public.blastapi.io",
    chainId: 84531,
    brokerAddress: "0xdbA72d5d26823F0E92FacDE8b3CE4f9897595f35",
  },
  "12": {
    name: "mantle-testnet",
    url: "https://rpc.testnet.mantle.xyz",
    chainId: 5001,
    brokerAddress: "0xdbA72d5d26823F0E92FacDE8b3CE4f9897595f35",
  },
  "13": {
    name: "manta-testnet",
    url: "https://manta-testnet.calderachain.xyz/http",
    chainId: 3441005,
    brokerAddress: "0xdbA72d5d26823F0E92FacDE8b3CE4f9897595f35",
  },
  "14": {
    name: "taiko-testnet",
    url: "https://rpc.test.taiko.xyz",
    chainId: 167005,
    brokerAddress: "0xdbA72d5d26823F0E92FacDE8b3CE4f9897595f35", // TODO:
  },
};
