import PropTypes from 'prop-types';
import css from "./Profile.module.css";
import { profileImagesSize } from 'constants';

export const Profile = ({
	avatar,
	location,
	stats,
	tag,
	username
}) => {

	const { md } = profileImagesSize;

	return (
		<div className={`${css.profile} section`}>
			<div className={css.description}>
				<img
					width={md}
					height={md}
					src={avatar}
					alt={tag}
					className={css.avatar}
				/>
				<p className={css.name}>{username}</p>
				<p className={css.tag}>{tag}</p>
				<p className={css.location}>{location}</p>
			</div>

			<ul className={css.stats}>
				<li>
					<span className={css.label}>Followers</span>
					<span className={css.quantity}>{stats.followers}</span>
				</li>
				<li>
					<span className={css.label}>Views</span>
					<span className={css.quantity}>{stats.views}</span>
				</li>
				<li>
					<span className={css.label}>Likes</span>
					<span className={css.quantity}>{stats.likes}</span>
				</li>
			</ul>
		</div>
	)
}

Profile.propTypes = {
	avatar: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	stats: PropTypes.exact({
		followers: PropTypes.number.isRequired,
		views: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired,
	})
}