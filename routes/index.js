const router = require("express").Router();
const signerRoute = require("./signerRoute");
const rarityRoute = require("./rarityRoute")

router.use("/signer", signerRoute);
router.use("/rarity", rarityRoute);
router.use("/", async(req, res)=>{
    res.send("Server Up")
})
module.exports = router;