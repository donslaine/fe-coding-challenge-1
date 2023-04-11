import React from "react";
import "./ProfileCard.css";

export const ProfileCard = ({ user }) => {
	return (
		<div className="profile-card">
			<div className="profile-user-card">
				<img className="image" src={user.avatar_url} alt={user.login} />
				<h2>{user.name}</h2>
				<p>{user.login}</p>
				<p>{user.location}</p>
				<p>{user.blog}</p>
			</div>
			<div className="right-half">
				<div className="repo-info">
					<div>
						<h2>{user.public_repos}</h2>
						<p>Public Repos</p>
					</div>
					<div>
						<h2>{user.public_gists}</h2>
						<p>Public Gists</p>
					</div>
					<div>
						<h2>{user.followers}</h2>
						<p>Followers</p>
					</div>
					<div>
						<h2>{user.following}</h2>
						<p>Following</p>
					</div>
				</div>
				<div className="user-info">
					<p>
						Biography: <p>{user.bio}</p>
					</p>
					<p>Company: {user.company}</p>
					<p>Twitter: {user.twitter_username}</p>
				</div>
			</div>
		</div>
	);
};
