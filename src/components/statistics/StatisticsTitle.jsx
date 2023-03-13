import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

export const StatisticsTitle = ({ children }) => {
	return (
		<>
			{children && <h2 className={css.title}>{children}</h2>}
		</>
	)
}

StatisticsTitle.propTypes = {
	children: PropTypes.string.isRequired
}