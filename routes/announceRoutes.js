const router = require("express").Router();
const auth = require('../middleware/auth')

const { newPost, getAllPosts } = require("../controllers/announceController");

router.post("/", auth, newPost);

router.get("/", auth, getAllPosts)

module.exports = router;
