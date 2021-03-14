const router = require("express").Router();
const {newPost} = require('../controllers/announceController')

router.get("/", newPost);



module.exports = router;
