const Confirm = require("../models/confirmModel");
const User = require("../models/userModel");

module.exports = {
	userConfirm: async (req, res) => {
		try {
			const confirm = await Confirm.findOne({
				token: req.body.token,
			});
			console.log(confirm.userId);

			const confirmUser = await User.findById(confirm.userId);

			confirmUser.confirmed = true;
			confirmUser.save();
			res.send("User Confirmed");
		} catch (err) {
			res.send(err);
		}
	},
};
