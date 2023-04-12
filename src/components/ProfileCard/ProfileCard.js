import React from "react";
import "./ProfileCard.css";

export const ProfileCard = ({ user }) => {
	return (
		<div className="profile-card">
			<div className="profile-user-card">
				<img className="image" src={user.avatar_url} alt={user.login} />
				<div className="upper">
					<h2>{user.name}</h2>
					<p>{user.login}</p>
				</div>
				<div className="lower">
					<p>{user.location}</p>
					<p>
						<a href={user.blog}>{user.blog}</a>
					</p>
				</div>
			</div>
			<div className="right-half">
				<div className="repo-info">
					<div className="nums">
						<h2>{user.public_repos}</h2>
						<p>
							<strong>Public Repos</strong>
						</p>
					</div>
					<div className="nums">
						<h2>{user.public_gists}</h2>
						<p>
							<strong>Public Gists</strong>
						</p>
					</div>
					<div className="nums">
						<h2>{user.followers}</h2>
						<p>
							<strong>Followers</strong>
						</p>
					</div>
					<div className="nums">
						<h2>{user.following}</h2>
						<p>
							<strong>Following</strong>
						</p>
					</div>
				</div>
				<br />
				<div className="user-info">
					<p>
						<strong>Biography:</strong> {user.bio} {user.bio ? <br /> : null}
					</p>
					<p>
						<strong>Company:</strong> {user.company}{" "}
						{user.company ? <br /> : null}
					</p>
					<p>
						<strong>Twitter:</strong> {user.twitter_username ? "@" : null}
						{user.twitter_username} <br />
					</p>
				</div>
			</div>
		</div>
	);
};
