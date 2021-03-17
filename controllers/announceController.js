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

	getAllPosts: async (req, res) => {
		try {
			const allPosts = await Announce.find();
			console.log(allPosts);
			res.json(allPosts);
		} catch (err) {
			console.log("new error", err);
			res.send("Can't view all post");
		}
	},
	deletePost: async (req, res) => {
		try {
			res.json(await Announce.findByIdAndDelete(req.params._id));
		} catch (err) {
			res.send(err);
		}
	},
};
