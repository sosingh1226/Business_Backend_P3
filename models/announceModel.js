const mongoose = require("mongoose");

const announceSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	text: { type: String, required: true },
	userId: { type: String, required: true },
});

module.exports = Announce = mongoose.model("announce", announceSchema);
