import Web3 from 'web3';

// get new web3 from Metamask web3 provider
const provider = window.ethereum;
provider.enable();
const web3 = new Web3(provider);

export default web3;