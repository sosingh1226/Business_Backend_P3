import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteBtn from "./DeleteBtn/index";

const EannounceContainer = () => {
	const [disabled, setDisabled] = useState(true);
	const [posts, setPosts] = useState([]);

	const deletePost = async (id) => {
		try {
			await axios.delete(`/announce/${id}`, {
				headers: { "x-auth-token": localStorage.getItem("auth-token") },
			});
		} catch (err) {
			console.log(err);
		}
		window.location.reload();
	};

	useEffect(() => {
		(async () => {
			const allPosts = await axios.get("/announce", {
				headers: { "x-auth-token": localStorage.getItem("auth-token") },
			});

			//NOTE: This changes the format of the date, need to implement this to createdAt
			// const setTime =() => {
			// 	let lastAddedTime = allPosts.data.length - 1;
			// 	if (lastAddedTime >= 0) {
			// 		let newTime = new Date(
			// 			allPosts.data[lastAddedTime].createdAt
			// 		).toLocaleDateString("en-US", {
			// 			month: "short",
			// 			day: "numeric",
			// 			hour: "2-digit",
			// 			minute: "2-digit",
			// 			timeZone: "America/Los_Angeles",
			// 		});
			// 		console.log(newTime);
			// 	}
			// };

			setPosts(allPosts.data.reverse());
		})();
	}, []);

	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Date</th>
						<th scope="col">Subject</th>
						<th scope="col">Message</th>
						<th scope="col">Name</th>
					</tr>
				</thead>
				<tbody>
					{posts.map((post, index) => (
						<tr key={index}>
							<th scope="row">{post.createdAt}</th>
							<td>{post.title}</td>
							<td>{post.text}</td>
							<td><DeleteBtn
								style={{
									opacity: disabled ? 0.25 : 1,
									pointerEvents: disabled ? "none" : "initial",
								}}
								onClick={() => deletePost(post._id)}
							/></td>
							
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default EannounceContainer;
