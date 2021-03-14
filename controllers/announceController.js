const Announce = require("../models/announceModel");

module.exports = {
	newPost: async (req, res) => {
		const newPost = new Announce({
			title: req.body.title,
			text: req.body.text,
			userId: req.user,
		});
		const savePost = await newPost.save();
		res.json(savePost);
	},

};
