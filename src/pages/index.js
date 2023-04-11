import * as React from "react";
import { Octokit } from "@octokit/core";
import { UserCard } from "../components/UserCard/UserCard";
import { Router } from "@reach/router";
import "./index.css";
import Profile from "./profile";
import ProfileCard from "../components/ProfileCard/ProfileCard";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const IndexPage = () => {
	const [users, setUsers] = React.useState(null);

	React.useEffect(() => {
		async function getUsers() {
			const response = await octokit.request("GET /users", {
				per_page: 30,
				headers: {
					"X-GitHub-Api-Version": "2022-11-28",
				},
			});
			setUsers(response.data);
		}
		getUsers();
	}, []);

	console.log(users);

	return (
		<main>
			<div className="user-container">
				{users ? (
					users.map((user) => <UserCard key={user.id} user={user} />)
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		</main>
	);
};

export default IndexPage;

export const Head = () => <title>Github User Viewer - Coding Challenge</title>;
