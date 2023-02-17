import BodyRow from "./BodyRow";

const TransactionsHistoryBody = ({ transactions }) => {
	return (
		<tbody className="transactions-history__body">
			{transactions.map(transaction => <BodyRow transaction={transaction} key={transaction.id} />)}
		</tbody>
	)
}

export default TransactionsHistoryBody;