const router = require("express").Router();
const { userConfirm } = require("../controllers/confirmController");

router.post("/", userConfirm);

module.exports = router;
