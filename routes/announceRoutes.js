const router = require("express").Router();
const auth = require('../middleware/auth')

const { newPost, getAllPosts, deletePost } = require("../controllers/announceController");

router.post("/", auth, newPost);

router.get("/", auth, getAllPosts)

router.delete('/:id', auth, deletePost)

module.exports = router;
