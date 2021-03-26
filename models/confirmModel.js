const mongoose = require("mongoose");

const confirmSchema = new mongoose.Schema({
	token: {
		type: String,
		require: true,
	},
	userId: {
		type: String,
		required: true,
	},
});

module.exports = Confirm = mongoose.model("confirm", confirmSchema);
