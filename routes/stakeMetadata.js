const express = require('express');
var router = express.Router();

router.get('/:id', async (req, res) =>{
    console.log(req.params.id)
    const response = {
        "description": "Godjira Staking Pass", 
        "external_url": "", 
        "animation_url": "https://godjira-gen2.s3.ap-south-1.amazonaws.com/PG_stacking_pass.mp4", 
        "name": `Godjira Staking Pass #${req.params.id}`,
      }
      return res.send(response) 
})

module.exports = router;