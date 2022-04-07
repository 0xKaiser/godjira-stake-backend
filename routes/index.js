const router = require("express").Router();
const signerRoute = require("./signerRoute");

router.use("/signer", signerRoute);

module.exports = router;