require('dotenv').config()
const {ethers} = require('ethers');

const wallet = new ethers.Wallet("f2cd36a4684a07e8375b2224e6d10c09226d9c14f0792143049c1bc49250d5f2");
const domain = {
    name: "Godjira",
    version: "1",
    chainId: 4,
    verifyingContract: "0xCc65579531a11eF955aFB9a50840a4996B1F2b86"
}
const types ={
    whitelisted:[
        {name: 'tokenId', type: 'uint256'},
        {name: 'rarity', type: 'uint256'},
        {name: 'isGenesis', type: 'bool'}
    ]
}
async function signTransaction(tokenId,rarity,isGenesis) {
    console.log('signTransaction')
  const value = {
    tokenId: tokenId,
    rarity: rarity,
    isGenesis: isGenesis
  };
  console.log(tokenId,rarity);

  const sign = await wallet._signTypedData(domain, types, value);
  console.log([tokenId, rarity, isGenesis, sign]);
  return sign;
}

module.exports = { signTransaction };