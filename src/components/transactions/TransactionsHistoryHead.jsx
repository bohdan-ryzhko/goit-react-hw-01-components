import HeadRow from "./HeadRow";

const TransactionsHistoryHead = ({ transactions }) => {
	return (
		<thead className="transactions-history__head">
			<HeadRow transactions={transactions} />
		</thead>
	)
}

export default TransactionsHistoryHead;