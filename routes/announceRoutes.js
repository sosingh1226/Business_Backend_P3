const router = require("express").Router();

router.get("/", (req, res) => {
    console.log('hello')
    res.send('success from routes')
});



module.exports = router;
