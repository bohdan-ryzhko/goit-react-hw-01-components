
import TransactionsHistoryHead from "./TransactionsHistoryHead";
import TransactionsHistoryBody from "./TransactionsHistoryBody";

const TransactionsHistory = ({ tableHead, transactions }) => {
	return (
		<table className="transaction-history">
			<TransactionsHistoryHead transactions={tableHead} />
			<TransactionsHistoryBody transactions={transactions} />
		</table>
	)
}

export default TransactionsHistory;