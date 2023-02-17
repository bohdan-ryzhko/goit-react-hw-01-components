import FriendsListItem from "./FriendsListItem";

const FriendList = ({ friends }) => {
	console.log(friends);
	return (
		<ul className="friend-list">
			{friends.map(friend => <FriendsListItem friends={friend} key={friend.id} />)}
		</ul>
	)
}



export default FriendList;