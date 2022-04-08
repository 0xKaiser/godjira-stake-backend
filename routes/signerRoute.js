const express = require('express');
var router = express.Router();
const { signTransaction } = require("../utils/signer");
const { getRarityGen, getRarityGen2 } = require("../utils/rarity")

router.post('/gen', async (req, res) => {
    try {
        const { tokenId } = req.body;
        const rarity = await getRarityGen(tokenId);
        if (!rarity) {
            res.sendStatus(500)
        }
        else {
            const sign = await signTransaction(tokenId,rarity,true)
            res.send({
                signature: [tokenId, rarity,true,sign]
            }).status(200)
        }
    } catch (err) {
        res.send(err.message).status(500)
    }

})

router.post('/gen2', async (req, res) => {
    try {
        const { tokenId } = req.body;
        const rarity = await getRarityGen2(tokenId);
        if (!rarity) {
            res.sendStatus(500)
        }
        else {
            const sign = await signTransaction(tokenId,rarity,false)
            res.send({
                signature: [tokenId, rarity,false,sign]
            }).status(200)
        }
    } catch (err) {
        res.send(err.message).status(500)
    }

})

module.exports = router