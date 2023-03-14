import PropTypes from 'prop-types';
import { Friend } from "./Friend";
import css from "./Friends.module.css";

export const FriendList = ({ friends }) => {
	return (
		<ul className={`${css["friends-list"]} section`}>
			{friends.map(friend => <Friend friend={friend} key={friend.id} />)}
		</ul>
	)
}

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.exact({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
		})
	)
}