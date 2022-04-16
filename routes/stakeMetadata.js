const express = require('express');
var router = express.Router();
const {getBagDetails} = require('../utils/bagData')
router.get('/:id', async (req, res) =>{
    console.log(req.params.id)
    let attributes = []
    const n = await getBagDetails(req.params.id)
    if(n[0]!==0){
      attributes.push({
            "trait_type": "Genesis in Bag", 
            "value": n[0]
      })
    }
    if(n[1].length > 0){
      attributes.push({
        "trait_type": "Gen2 in Bag", 
        "value": n[1]
  })
    }
    const response = {
        "description": "Godjira Staking Pass", 
        "external_url": "", 
        "animation_url": "https://godjira-gen2.s3.ap-south-1.amazonaws.com/PG_stacking_pass.mp4", 
        "name": `Godjira Staking Pass #${req.params.id}`,
        "attributes": attributes
      }
      return res.send(response) 
})

module.exports = router;