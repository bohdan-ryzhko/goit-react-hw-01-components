import PropTypes from 'prop-types';

const FriendsListItem = ({ friends:{ avatar, name, isOnline } }) => {
	return (
		<li className="friends-list__item">
			<span className="status" data-online={isOnline}></span>
			<img className="avatar" src={avatar} alt={name} width="48" />
			<p className="name">{name}</p>
		</li>
	)
}

FriendsListItem.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string,
	isOnline: PropTypes.bool,
}

export default FriendsListItem;