import * as React from "react";
import { useParams, Router } from "@reach/router";
import { ProfileCard } from "../components/ProfileCard/ProfileCard";
import { Octokit } from "@octokit/core";
import { navigate } from "gatsby";

const octokit = new Octokit({ auth: process.env.GATSBY_GITHUB_TOKEN });

const Profile = ({ location }) => {
	const [singleUser, setSingleUser] = React.useState(null);

	React.useEffect(() => {
		async function getUser() {
			const response = await octokit.request("GET /users/{username}", {
				username: location.state.login,
				headers: {
					"X-GitHub-Api-Version": "2022-11-28",
				},
			});
			if (response.status === 404) {
				navigate("/404");
			}
			setSingleUser(response.data);
		}
		getUser();
	}, []);
	return (
		<main>
			{singleUser ? <ProfileCard user={singleUser} /> : <h1>Loading...</h1>}
		</main>
	);
};

export default Profile;
