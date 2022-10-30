

# Refund-by-Location
The refund by location smart contract is aimed to be used when one party, for example an employer, agrees to pay another party, for example an employee, for being present in a certain geographic area for a certain duration.

**Table of Contents**

- [Refund-by-Location](#Refund-by-Location)
  - [Overview](#overview)
  - [About](#about)
  - [Project Structure](#project-structure)
    - [betting_example](#betting_example)
    - [refund_contract](#refund_contract)
    - [Refund-By-Location-Frontend](#Refund-By-Location-Frontend)
    - [Refund-By-Location-Flutter](#Refund-By-Location-Flutter)
    - [.github](#.github)
    - [root folder](#root-folder)
    - [Installation-guide](#Installation-guide)

***

## Overview

This repository is used for week 10 challenge of 10Academy. The instructions for this project can be found in the challenge document.

The refund by location smart contract is aimed to be used when one party, for
example, an employer, agrees to pay another party, for example, an
employee, for being present in a certain geographic area for a certain
duration. The employee’s phone sends its GPS location to a smart contract at
a certain interval. Based on the pre-agreed contract codified in an Ethereum
smart contract, a cryptocurrency payment is executed when all the agreed
conditions are met.
If at any point, the GPS sensor indicates that an employee is outside the range
of the agreed GPS area, the contract state will be updated to indicate that it is
out of compliance.



## About

Produce an Ethereum based dApp that has both the smart contract tested
and deployed in a testnet and a front end that will allow monitoring of the
status.


## Project Structure
The repository has a number of files including python scripts, jupyter notebooks, raw and cleaned data, and text files. Here is their structure with a brief explanation.

### betting_example
- Example implementation of https://medium.com/ethereum-developers/the-ultimate-end-to-end-tutorial-to-create-and-deploy-a-fully-descentralized-dapp-in-ethereum-18f0cf6d7e0e

### refund_contract
- Truffle implementation of this project

### Refund-By-Location-Frontend
- Front end submodule created using reactjs
***
- Inbound Location
***
![Alt text](LcoationDetialMap.png?raw=true "Map")
- Out of bound Location
***
![Alt text](LocationDetailMap3Outbound.png?raw=true "Map")


### Refund-By-Location-Flutter
- Mobile app submodule created using flutter
***
- Inbound Location
***
![Alt text](HistoryWithBoundaries.jpg?raw=true "Map")

***
### Installation-guide

## Smart Contract usage guide
```bash
git clone https://github.com/natyrix/Refund-by-Location.git
cd Refund-by-Location
npm -g install truffle
npm install
truffle compile
truffle deploy --network <Desired network>
```


## Frontend usage guide
```bash
git clone https://github.com/natyrix/Refund-By-Location-Frontend.git
cd Refund-By-Location-Frontend
npm install --legacy-peer-deps
npm start
```

## Flutter usage guide
```bash
git clone git clone https://github.com/natyrix/Refund-by-Location-Flutter.git
cd Refund-by-Location-Flutter
flutter pub get
flutter run --no-sound-null-safety
```

***

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


[contributors-shield]: https://img.shields.io/github/contributors/natyrix/Refund-by-Location.svg?style=for-the-badge
[contributors-url]: https://github.com/natyrix/Refund-by-Location/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/natyrix/Refund-by-Location.svg?style=for-the-badge
[forks-url]: https://github.com/natyrix/Refund-by-Location/network/members
[stars-shield]: https://img.shields.io/github/stars/natyrix/Refund-by-Location.svg?style=for-the-badge
[stars-url]: https://github.com/natyrix/Refund-by-Location/stargazers
[issues-shield]: https://img.shields.io/github/issues/natyrix/Refund-by-Location.svg?style=for-the-badge
[issues-url]: https://github.com/natyrix/Refund-by-Location/issues
