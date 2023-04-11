import React from "react";
import "./UserCard.css";
import { Link as GatsbyLink } from "gatsby";

export const UserCard = ({ user }) => {
	console.log(user);
	return (
		<div className="user-card">
			<img className="image" src={user.avatar_url} alt={user.login} />
			<h2>{user.login}</h2>
			<GatsbyLink to={`/profile`} state={{ login: user.login }}>
				<button>Profile</button>
			</GatsbyLink>
		</div>
	);
};
