# Artistry Sandbox
A Decentralized Platform for creators and their fans.

There are different platforms available out there to support creators and fans but we are a decentralized platform that connects creators and their fans without any intermediary involved. This platform onboards all kinds of creators musicians, writers, podcasters and the list continues. The creator is paid in the form of ###CELO tokens for his/her art through a P2P(peer to peer) system and so the platform doesn’t get to decide how much should the creator be paid. It is his/her art that speaks for itself.  


The smart contracts are deployed on the Celo Alfajores Test Network and we have used the Metamask wallet for making the transactions. NFT.Storage is used to store the off-chain NFT data on IPFS and Filecoin.

### Smart Contract Deployments

**Celo Alfajores Test Network**

| Contract                                                                                                                                       | Deployed address                             |
| :--------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------- |
| [CryptoStackMain Contract](https://alfajores-blockscout.celo-testnet.org/address/0xEe2408E9c16e0deD08e4274F5dA7A3B05EAC380d/transactions)      | `0xEe2408E9c16e0deD08e4274F5dA7A3B05EAC380d` |
| [CryptoStackRewardNFT Contract](https://alfajores-blockscout.celo-testnet.org/address/0x890B4C8e5582c528AE0c8d740e479E52e871a4a6/transactions) | `0x890B4C8e5582c528AE0c8d740e479E52e871a4a6` |

## Run Locally

### Pre-Requisites

- Truffle Suite
- Ganache CLI

```sh
$ npm install -g truffle
$ npm install -g ganache-cli
```

Clone the project

```sh
$ git clone https://github.com/Nandan-unni/CryptoRebels.git
$ cd CryptoRebels
```

### Setting up a local Blockchain

Install dependencies

```sh
$ cd truffle
$ npm install
```

Compile Smart Contracts

```sh
$ truffle compile
```

Run ganache

```sh
$ ganache-cli
```

Run migrations to deploy the smart contracts

```sh
$ truffle migrate
```

To run tests, run

```sh
$ truffle test
```

### Setting up Client App

1. Installing dependencies

   ```sh
   cd frontend
   # using yarn
   yarn

   # or using npm
   npm i
   ```

2. Running locally

   ```sh
   # using yarn
   yarn dev

   # or using npm
   npm run dev
   ```
