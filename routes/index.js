const router = require("express").Router();
const signerRoute = require("./signerRoute");

router.use("/signer", signerRoute);
router.use("/rarity", signerRoute);

module.exports = router;