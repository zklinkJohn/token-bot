import { writeFileSync } from "fs";

const supportTokens = {
  jsonrpc: "2.0",
  result: {
    "34": {
      id: 34,
      symbol: "AVAX",
      usdPrice: "12.5211920915171200",
      chains: {
        "2": {
          chainId: 2,
          address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          decimals: 18,
          fastWithdraw: false,
        },
      },
    },
    "142": {
      id: 142,
      symbol: "wMATIC",
      usdPrice: "0.6789783391922114",
      chains: {
        "1": {
          chainId: 1,
          address: "0x76c9ef75f019496376c04dd19c38637cacce9e42",
          decimals: 18,
          fastWithdraw: true,
        },
      },
    },
    "151": {
      id: 151,
      symbol: "LineaPEPE",
      usdPrice: "0.000001216853613126036000",
      chains: {
        "7": {
          chainId: 7,
          address: "0x1f524c32bb57107eed4a9383287fb008a5b10e1c",
          decimals: 18,
          fastWithdraw: true,
        },
      },
    },
    "150": {
      id: 150,
      symbol: "USDT",
      usdPrice: "1",
      chains: {
        "7": {
          chainId: 7,
          address: "0x18cd805e441c906d13d339842bb95c321b352a7d",
          decimals: 18,
          fastWithdraw: true,
        },
        "9": {
          chainId: 9,
          address: "0x4adecd0b8715b7222bf160f69b72a0a2e78c3709",
          decimals: 18,
          fastWithdraw: true,
        },
        "4": {
          chainId: 4,
          address: "0x4647a67c08ffa70ac1051fee36a1a16a1690b90a",
          decimals: 18,
          fastWithdraw: true,
        },
        "1": {
          chainId: 1,
          address: "0x91e5d0c39e3f2de1d8cbbecca3604f6704fb3494",
          decimals: 6,
          fastWithdraw: true,
        },
        "2": {
          chainId: 2,
          address: "0x2b1d07f867b220fcc818e9d7ff4fcb08e63b2ae5",
          decimals: 18,
          fastWithdraw: true,
        },
        "3": {
          chainId: 3,
          address: "0x5f9969e07339553969f01d9d23f7abb877c25baf",
          decimals: 18,
          fastWithdraw: true,
        },
      },
    },
    "4": {
      id: 4,
      symbol: "USD-BUSD",
      usdPrice: "1",
      chains: {},
    },
    "3": {
      id: 3,
      symbol: "USD-USDC",
      usdPrice: "1",
      chains: {},
    },
    "147": {
      id: 147,
      symbol: "QUICK",
      usdPrice: "0.04585125020370593000",
      chains: {
        "1": {
          chainId: 1,
          address: "0x01230636333b7260f466948639645af865b79b68",
          decimals: 18,
          fastWithdraw: true,
        },
      },
    },
    "152": {
      id: 152,
      symbol: "USDL",
      usdPrice: "1",
      chains: {
        "7": {
          chainId: 7,
          address: "0x0bf211e04263125ece2e2aa797c5d1748a4f825b",
          decimals: 18,
          fastWithdraw: true,
        },
      },
    },
    "141": {
      id: 141,
      symbol: "wETH",
      usdPrice: "1836.494757934062",
      chains: {
        "3": {
          chainId: 3,
          address: "0x7caf0baa725e02e24846995af8edc77ed546bc47",
          decimals: 18,
          fastWithdraw: true,
        },
        "5": {
          chainId: 5,
          address: "0xe91dfb39dd76c5ce2b9eadecd23d088433073811",
          decimals: 18,
          fastWithdraw: false,
        },
        "1": {
          chainId: 1,
          address: "0x329b54e5e5d0467cf7b04553f2e3aabb22372b4e",
          decimals: 18,
          fastWithdraw: true,
        },
        "2": {
          chainId: 2,
          address: "0xdfcf5b34da20f8e49b4e0517f4df4c8ab0fe94ad",
          decimals: 18,
          fastWithdraw: true,
        },
        "12": {
          chainId: 12,
          address: "0x70194e2400eb89fa22e3bd0dafa097ca09dae76c",
          decimals: 18,
          fastWithdraw: false,
        },
        "10": {
          chainId: 10,
          address: "0x8c4b80a5d5374ff2dc07310ef9fdbc44e487b6c2",
          decimals: 18,
          fastWithdraw: false,
        },
        "13": {
          chainId: 13,
          address: "0x70194e2400eb89fa22e3bd0dafa097ca09dae76c",
          decimals: 18,
          fastWithdraw: false,
        },
        "11": {
          chainId: 11,
          address: "0x70194e2400eb89fa22e3bd0dafa097ca09dae76c",
          decimals: 18,
          fastWithdraw: false,
        },
        "9": {
          chainId: 9,
          address: "0xb81fe42de28e7452088b77f3eb9685487734e088",
          decimals: 18,
          fastWithdraw: true,
        },
        "14": {
          chainId: 14,
          address: "0x70194e2400eb89fa22e3bd0dafa097ca09dae76c",
          decimals: 18,
          fastWithdraw: false,
        },
        "4": {
          chainId: 4,
          address: "0xa07250fa05e585ee78f6abe77a0ba83835c8cedf",
          decimals: 18,
          fastWithdraw: true,
        },
        "7": {
          chainId: 7,
          address: "0x457e705c8552f79ae70bec19df5cd46f05384fca",
          decimals: 18,
          fastWithdraw: false,
        },
      },
    },
    "145": {
      id: 145,
      symbol: "AUTO",
      usdPrice: "15.7506522526620600",
      chains: {
        "2": {
          chainId: 2,
          address: "0x8f8b0bfb8458f73249024f22b4cf7b6c0eb60996",
          decimals: 18,
          fastWithdraw: true,
        },
        "1": {
          chainId: 1,
          address: "0x1f34934e3165b3e5428f6a4d873d2620302c7223",
          decimals: 18,
          fastWithdraw: true,
        },
      },
    },
    "35": {
      id: 35,
      symbol: "BNB",
      usdPrice: "240.2783950640274000",
      chains: {
        "3": {
          chainId: 3,
          address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          decimals: 18,
          fastWithdraw: false,
        },
      },
    },
    "19": {
      id: 19,
      symbol: "BUSD",
      usdPrice: "1",
      chains: {
        "2": {
          chainId: 2,
          address: "0xb5e8fbdcde0251851af328065c7e3dba6ab037cd",
          decimals: 18,
          fastWithdraw: true,
        },
        "1": {
          chainId: 1,
          address: "0xb3ee6008fea338aef0ab4f775b044b279be65d7a",
          decimals: 18,
          fastWithdraw: true,
        },
      },
    },
    "37": {
      id: 37,
      symbol: "MNT",
      usdPrice: "0.5000",
      chains: {
        "12": {
          chainId: 12,
          address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          decimals: 18,
          fastWithdraw: false,
        },
      },
    },
    "140": {
      id: 140,
      symbol: "wBTC",
      usdPrice: "29080.283620382520",
      chains: {
        "2": {
          chainId: 2,
          address: "0xc6df93a49198bb902abc0231955ec77ae0cc34aa",
          decimals: 18,
          fastWithdraw: true,
        },
        "1": {
          chainId: 1,
          address: "0x0fc3283a6d40550185a4d8cbd00030194475bbc4",
          decimals: 18,
          fastWithdraw: true,
        },
      },
    },
    "146": {
      id: 146,
      symbol: "JOE",
      usdPrice: "0.3074908839946341",
      chains: {
        "2": {
          chainId: 2,
          address: "0x145407c16831512459f6d4a672e16b4dcfb3fc40",
          decimals: 18,
          fastWithdraw: true,
        },
      },
    },
    "33": {
      id: 33,
      symbol: "MATIC",
      usdPrice: "0.6813488772909386",
      chains: {
        "1": {
          chainId: 1,
          address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          decimals: 18,
          fastWithdraw: false,
        },
      },
    },
    "1": {
      id: 1,
      symbol: "USD",
      usdPrice: "1",
      chains: {},
    },
    "153": {
      id: 153,
      symbol: "DAI",
      usdPrice: "0.9993924851277333",
      chains: {
        "4": {
          chainId: 4,
          address: "0xc71bf64b5f710a81846b5a85037fecd3e8e3a11d",
          decimals: 18,
          fastWithdraw: true,
        },
      },
    },
    "18": {
      id: 18,
      symbol: "USDC",
      usdPrice: "1",
      chains: {
        "2": {
          chainId: 2,
          address: "0x2645b73c58702ab81904a6cabdf63340b4ce29d3",
          decimals: 18,
          fastWithdraw: true,
        },
        "14": {
          chainId: 14,
          address: "0x8cddb93bd8845ae509a6ec1e29836852a9b41b10",
          decimals: 18,
          fastWithdraw: false,
        },
        "5": {
          chainId: 5,
          address: "0xa66e73f0808098c105d8c5d211b45b9bc26966f9",
          decimals: 18,
          fastWithdraw: false,
        },
        "7": {
          chainId: 7,
          address: "0xc9639ca358a78d10497373a7a795b48e629a14a6",
          decimals: 18,
          fastWithdraw: false,
        },
        "11": {
          chainId: 11,
          address: "0x8cddb93bd8845ae509a6ec1e29836852a9b41b10",
          decimals: 18,
          fastWithdraw: false,
        },
        "1": {
          chainId: 1,
          address: "0xa581b8e2b305d3a8a1ef2442159e4d46bc9fcc50",
          decimals: 18,
          fastWithdraw: true,
        },
        "10": {
          chainId: 10,
          address: "0x8cddb93bd8845ae509a6ec1e29836852a9b41b10",
          decimals: 18,
          fastWithdraw: false,
        },
        "12": {
          chainId: 12,
          address: "0x8cddb93bd8845ae509a6ec1e29836852a9b41b10",
          decimals: 18,
          fastWithdraw: false,
        },
        "13": {
          chainId: 13,
          address: "0x8cddb93bd8845ae509a6ec1e29836852a9b41b10",
          decimals: 18,
          fastWithdraw: false,
        },
        "3": {
          chainId: 3,
          address: "0x0218aa0360a2f9e6046d1a893f9fd5c0d133801d",
          decimals: 18,
          fastWithdraw: true,
        },
        "9": {
          chainId: 9,
          address: "0x27cbbe82447a0c188ebd7bc5fd706d140c7b0642",
          decimals: 18,
          fastWithdraw: true,
        },
        "4": {
          chainId: 4,
          address: "0x0a7b3979ed234bb2753703fbb89633bb649db17f",
          decimals: 18,
          fastWithdraw: true,
        },
      },
    },
    "36": {
      id: 36,
      symbol: "ETH",
      usdPrice: "1839.942149897469",
      chains: {
        "11": {
          chainId: 11,
          address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          decimals: 18,
          fastWithdraw: false,
        },
        "10": {
          chainId: 10,
          address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          decimals: 18,
          fastWithdraw: false,
        },
        "4": {
          chainId: 4,
          address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          decimals: 18,
          fastWithdraw: false,
        },
        "13": {
          chainId: 13,
          address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          decimals: 18,
          fastWithdraw: false,
        },
        "5": {
          chainId: 5,
          address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          decimals: 18,
          fastWithdraw: false,
        },
        "14": {
          chainId: 14,
          address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          decimals: 18,
          fastWithdraw: false,
        },
        "7": {
          chainId: 7,
          address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          decimals: 18,
          fastWithdraw: false,
        },
        "9": {
          chainId: 9,
          address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          decimals: 18,
          fastWithdraw: false,
        },
      },
    },
    "148": {
      id: 148,
      symbol: "wLDO",
      usdPrice: "1.8523887029756060",
      chains: {
        "4": {
          chainId: 4,
          address: "0x9437da878a89a12e01bd0b3f3b4c07142bc50beb",
          decimals: 18,
          fastWithdraw: true,
        },
      },
    },
    "149": {
      id: 149,
      symbol: "wBNB",
      usdPrice: "239.9633088024174000",
      chains: {
        "3": {
          chainId: 3,
          address: "0xd39f6bf7e558ad0f3bbc03150f16469bdf4ca8c4",
          decimals: 18,
          fastWithdraw: true,
        },
      },
    },
    "143": {
      id: 143,
      symbol: "wAVAX",
      usdPrice: "12.4753747969032000",
      chains: {
        "2": {
          chainId: 2,
          address: "0x2796baed33862664c08b8ee5fa2d1283c79593b1",
          decimals: 18,
          fastWithdraw: true,
        },
      },
    },
    "144": {
      id: 144,
      symbol: "SYN",
      usdPrice: "0.5942387271444109",
      chains: {
        "2": {
          chainId: 2,
          address: "0x2cf622797cae91054911ab31c6d0aa480b6d82bc",
          decimals: 18,
          fastWithdraw: true,
        },
        "1": {
          chainId: 1,
          address: "0x753130a418eccfa6b9e601c6b6d418871087e9b1",
          decimals: 18,
          fastWithdraw: true,
        },
      },
    },
  },
  id: 1,
};

export default supportTokens;

interface ITokenInfo {
  tokenId: number | string;
  symbol: string;
  chainId: number | string;
  decimals: number;
  contractAddress: string;
}

function converToChainId2TokenId() {
  const result = supportTokens.result;
  const tokenIds = Object.keys(result);
  const newTokenList: ITokenInfo[] = [];
  for (const tokenId of tokenIds) {
    const tokenInfo = result[tokenId];
    const chains = Object.keys(tokenInfo.chains);
    for (const chainId of chains) {
      const newTokenInfo: ITokenInfo = {
        tokenId: tokenInfo.id,
        symbol: tokenInfo.symbol,
        chainId: chainId,
        decimals: tokenInfo.chains[chainId].decimals,
        contractAddress: tokenInfo.chains[chainId].address,
      };
      newTokenList.push(newTokenInfo);
    }
  }

  // console.log(JSON.stringify(newTokenList, null, 2));
  writeFileSync("src/newTokenList.json", JSON.stringify(newTokenList, null, 2));
}

converToChainId2TokenId();
