import PropTypes from 'prop-types';

const StatsList = ({ statsList: { followers, views, likes } }) => {
	return (
		<ul className="stats">
			<li className="stats-item">
				<span className="label">Followers</span>
				<span className="quantity">{followers}</span>
			</li>
			<li className="stats-item">
				<span className="label">Views</span>
				<span className="quantity">{views}</span>
			</li>
			<li className="stats-item">
				<span className="label">Likes</span>
				<span className="quantity">{likes}</span>
			</li>
		</ul>
	);
}

StatsList.propTypes = {
	followers: PropTypes.number,
	views: PropTypes.number,
	likes: PropTypes.number,
}

export default StatsList;