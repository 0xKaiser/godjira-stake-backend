const express = require('express');
const { ethers } = require("ethers");
var router = express.Router();
const { signTransaction } = require("../utils/signer");
const { getRarityGen, getRarityGen2 } = require("../utils/rarity")


router.post('/gen', async (req, res) => {
    try {
        const { tokenId } = req.body;
        const rarity = getRarityGen(tokenId);
        if (!rarity) {
            res.sendStatus(500)
        }
        else {
            const sign = signTransaction(tokenId,rarity)
            res.send({
                signature: sign
            }).status(200)
        }


    } catch (err) {
        res.send(err.message).status(500)
    }

})

router.post('/gen2', async (req, res) => {
    try {
        const { tokenId } = req.body;
        const rarity = getRarityGen2(tokenId);
        if (!rarity) {
            res.sendStatus(500)
        }
        else {
            const sign = signTransaction(tokenId,rarity)
            res.send({
                signature: sign
            }).status(200)
        }


    } catch (err) {
        res.send(err.message).status(500)
    }

})