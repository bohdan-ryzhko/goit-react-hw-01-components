import { friendsImageSize, getIsOnline } from "constants";
import css from "./Friends.module.css";

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
	const { xs } = friendsImageSize;
	return (
		<li className={css.item}>
			<span className={css[`${getIsOnline(isOnline)}`]}></span>
			<img className={css.avatar} src={avatar} alt={name} width={xs} height={xs} />
			<p className={css.name}>{name}</p>
		</li>
	)
}