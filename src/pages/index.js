import * as React from "react";
import { Octokit } from "@octokit/core";
import { UserCard } from "../components/UserCard/UserCard";
import { navigate } from "gatsby";
import "./index.css";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const IndexPage = () => {
	const [users, setUsers] = React.useState(null);
	const [logins, setLogins] = React.useState(null);

	React.useEffect(() => {
		async function getUsers() {
			const response = await octokit.request("GET /users", {
				per_page: 30,
				headers: {
					"X-GitHub-Api-Version": "2022-11-28",
				},
			});
			if (response.status === 404) {
				navigate("/404");
			}
			const logins = response.data.map((user) => user.login);
			setLogins(logins);
			setUsers(response.data);
		}
		getUsers();
	}, []);

	console.log(users);

	return (
		<main>
			<div className="user-container">
				{users ? (
					users.map((user) => (
						<UserCard key={user.id} user={user} logins={logins} />
					))
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		</main>
	);
};

export default IndexPage;

export const Head = () => <title>Github User Viewer - Coding Challenge</title>;
