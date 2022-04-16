const {ethers} = require('ethers')
const stakingAbi = require('./stakingAbi.json')

const stakingAddress = '0xe71a8ddCad4a950a1bbea58a301F62B5337eCB5c'
const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.alchemyapi.io/v2/yFf4R78iboMDharNDxQJdCn4Q7Bu6KDk");
const stakingContract = new ethers.Contract(stakingAddress,stakingAbi,provider)


const bagDetails = async(bagId) =>{
    const n = await bagsDetails(bagId)
    const genId = n.genTokenId.toNumber()
    const m = await gen2Tokens(bagId)
    console.log(genId,m,'tokens in bag')
    return [genId,m]
}

const bagsDetails = async (bagId) => {
    try {
      //console.log(bagId,"bagIds");
      //let bag_list = []
      //for (let i = 0; i < bagIds.length; i++) {
        console.log("bagId",bagId)
        const n = await stakingContract.bags(bagId);
        console.log("bags",n)
        return n
        ///bag_list.push(n)
      //}
      //return bag_list;
    } catch (e) {
      console.log(e.message);
    }
  }

const gen2Tokens = async (bagId) => {
    const gen2Count = await stakingContract.getTotalGen2InBag(bagId);
    console.log("bagCountGen2", gen2Count.toNumber());
    if (gen2Count.toNumber() === 0) {
      return [];
    } else {
      let gen2_list = [];
      for (let i = 0; i < gen2Count.toNumber(); i++) {
        const n = await stakingContract.getGen2InBagByIndex(bagId, i);
        gen2_list.push(n.toNumber());
      }
      console.log(gen2_list);
      return gen2_list;
    }
  };

module.exports = {bagDetails}