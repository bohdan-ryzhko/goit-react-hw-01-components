import PropTypes from "prop-types";
import { TransactionHistoryHead } from "./TransactionHistoryHead";
import { TransactionHistoryBody } from "./TransactionHistoryBody";
import css from "./transactions.module.css";

export const TransactionHistory = ({ items }) => {
	return (
		<table className={css["transaction-history"]}>
			<TransactionHistoryHead />
			<TransactionHistoryBody items={items} />
		</table>
	)
}

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		})
	)
}