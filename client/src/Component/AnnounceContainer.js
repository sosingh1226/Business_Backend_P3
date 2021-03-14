import React, { useState, useEffect } from "react";
import axios from "axios";

const AnnounceContainer = () => {
	const [form, setForm] = useState({ title: "", text: "" });

	const [posts, setPosts] = useState([]);

	const onChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const submitPost = async (e) => {
		e.preventDefault();
		const authToken = window.localStorage.getItem("auth-token");

		try {
			const newPost = await axios.post("/announce", form, {
				headers: { "x-auth-token": authToken },
			});

			console.log(newPost);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		(async () => {
			const allPosts = await axios.get("/announce", {
				headers: { "x-auth-token": localStorage.getItem("auth-token") },
			});
			console.log(allPosts);
		})();
	}, []);

	return (
		<div>
			<h1>Hello from Announcement Container</h1>
			<form onSubmit={submitPost}>
				<input
					type="text"
					name="title"
					placeholder="Title"
					onChange={onChange}
				/>
				<br />
				<textarea
					type="text"
					name="text"
					placeholder="Text"
					onChange={onChange}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>

			<div className="announcements">
				{posts.map((post) => (
                    <>
					<p>{post.title}</p>
                    <p>{post.text}</p>
                    </>
				))}
			</div>
		</div>
	);
};

export default AnnounceContainer;
