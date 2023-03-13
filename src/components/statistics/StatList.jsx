import PropTypes from 'prop-types';
import { StatsItem } from "./StatsItem";
import css from "./Statistics.module.css";

export const StatList = ({ stats }) => {
	return (
		<ul className={css["stat-list"]}>
			{stats.map(stat => <StatsItem stat={stat} key={stat.id} />)}
		</ul>
	)
}

StatList.propTypes = {
	stats: PropTypes.arrayOf(
		PropTypes.exact({
			label: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired,
			backgroundColor: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		})
	)
}