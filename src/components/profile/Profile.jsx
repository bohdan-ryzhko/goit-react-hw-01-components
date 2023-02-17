import PropTypes from 'prop-types';
import StatsList from "./StatsList";

const Profile = ({ userData: { username, tag, location, avatar, stats } }) => {
	return (
		<div className="profile">
			<div className="description">
				<img
					width="200"
					src={avatar}
					alt={username}
					className="avatar"
				/>
				<p className="name">{username}</p>
				<p className="tag">{tag}</p>
					<p className="location">{location}</p>
			</div>
				<StatsList statsList={stats} />
		</div>
	)
}

Profile.propTypes = {
	username: PropTypes.string,
	tag: PropTypes.string,
	location: PropTypes.string,
	avatar: PropTypes.string,
	stats: PropTypes.object,
}

export default Profile;