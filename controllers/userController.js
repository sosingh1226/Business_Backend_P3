const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const helper = require("../helpers/helper");

module.exports = {
	register: async (req, res) => {
		try {
			const { email, password, passwordCheck, displayName, role } = req.body;

			// validation (need one conditional for email validation)
			if (!email || !password || !passwordCheck || !displayName || !role) 
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
				role
			});

			const saveUser = await createNewUser.save();

			res.json(saveUser);
		} catch (err) {
			res.status(500).json({ error: err.message });
			
		}
	},

	login: async (req, res) => {
		try {
			const { email, password } = req.body;

			if (!email || !password) {
				res.status(400).json({ message: "must input correct credentials" });
			}

			const user = await User.findOne({ email: email });
			console.log("Role:-",helper.RoleChecker(user)) //When a user logs in to the app, the role gets logged in to the console

			if (!user) {
				res.status(400).json({ message: "User not defined" });
			}

			const matchPw = await bcrypt.compare(password, user.password);

			if (!matchPw) {
				res.status(400).json({ message: "Incorrect password" });
			}
			const token = jwt.sign(
				{
					id: user._id,
					role: user.role
				},
				process.env.JWT_SECRET,
				{ expiresIn: "2h" }
			);

			res.json({
				token,
				user: {
					id: user._id,
					displayName: user.displayName,
					role: user.role
				},
			});
		} catch (err) {
			res.status(500).json({ msg: err });
		}
	},
	getUser: async (req, res) => {
		try {
			const user = await User.findById(req.user);

			res.json({
				displayName: user.displayName,
				id: user._id,
				role: user.role
			});
		} catch (err) {
			res.send(err.response);
		}
	},
};
