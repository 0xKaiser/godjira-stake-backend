const router = require("express").Router();
const signerRoute = require("./signerRoute");

router.use("/signer", signerRoute);
router.use("/rarity", signerRoute);
router.use("/", async(req, res)=>{
    res.send("Server Up")
})
module.exports = router;