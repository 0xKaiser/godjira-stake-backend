const express = require('express');
var router = express.Router();
const { getRarityGen, getRarityGen2, getRarityGenarray, getRarityGen2array } = require("../utils/rarity")

router.post('/gen', async (req, res) => {
    try {
        const { tokenId } = req.body;
        const rarity = await getRarityGen(tokenId);
        if (!rarity) {
            res.sendStatus(500)
        }
        else {
            res.send({
                rarity: rarity
            }).status(200)
        }
    } catch (err) {
        res.send(err.message).status(500)
    }
})

router.post('/gen2', async (req, res) => {
    try {
        const { tokenId } = req.body;
        console.log(tokenId)
        const rarity = await getRarityGen2(tokenId);
        console.log(rarity,'rarity')
        if (!rarity) {
            res.sendStatus(500)
        }
        else {
            res.send({
                rarity: rarity
            }).status(200)
        }
    } catch (err) {
        res.send(err.message).status(500)
    }
})


router.post('/genarray', async (req, res) => {
    try {
        const { tokenId } = req.body;
        const rarity = await getRarityGenarray(tokenId);
        if (!rarity) {
            res.sendStatus(500)
        }
        else {
            res.send({
                rarity: rarity
            }).status(200)
        }
    } catch (err) {
        res.send(err.message).status(500)
    }
})

router.post('/gen2array', async (req, res) => {
    try {
        const { tokenId } = req.body;
        console.log(tokenId)
        const rarity = await getRarityGen2array(tokenId);
        console.log(rarity,'rarity')
        if (!rarity) {
            res.sendStatus(500)
        }
        else {
            res.send({
                rarity: rarity
            }).status(200)
        }
    } catch (err) {
        res.send(err.message).status(500)
    }
})


module.exports = router