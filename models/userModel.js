const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		match: [/.+@.+\..+/, "Enter a valid email"],
	},
	password: { type: String, required: true, minLength: 8 },
	displayName: { type: String, required: true },
	role: {
		type: String,
		enum: ["Manager", "Employee"],
		default: "Employee",
	},
	confirmed: { type: Boolean, default: false },
});

module.exports = User = mongoose.model("user", userSchema);
