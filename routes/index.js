const router = require("express").Router();
const signerRoute = require("./signerRoute");
const rarityRoute = require("./rarityRoute")
const stakingMetadataRoute = require("./stakeMetadata")

router.use("/signer", signerRoute);
router.use("/rarity", rarityRoute);
router.use("/metadata", stakingMetadataRoute);
router.use("/", async(req, res)=>{
    res.send("Server Working")
})
module.exports = router;