const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
require("dotenv").config();


module.exports = {
	register: async (req, res) => {
		try {
			const { email, password, passwordCheck, displayName } = req.body;

			// validation (need one conditional for email validation)
			if (!email || !password || !passwordCheck || !displayName)
				return res
					.status(400)
					.json({ msg: "Not all fields have been entered!" });

			if (password.length < 8)
				return res
					.status(400)
					.json({ msg: "Password needs to be at least 8 characters long!" });

			if (password !== passwordCheck)
				return res.status(400).json({ msg: "Password not match!" });

			const user = await User.findOne({ email: email });

			if (user)
				return res
					.status(400)
					.json({ msg: "An account with this email already exists!" });

			const salt = await bcrypt.genSalt();
			const hashPw = await bcrypt.hash(password, salt);

			const createNewUser = new User({
				email,
				password: hashPw,
				displayName,
			});

			const saveUser = await createNewUser.save();

			res.json(saveUser);
		} catch (err) {
			res.status(500).json({ error: err.message });
		}
	},
};
