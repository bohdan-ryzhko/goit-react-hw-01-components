import { TransactionHistoryRow } from "./TransactionHistoryRow";

export const TransactionHistoryBody = ({ items }) => {
	return (
		<tbody>
			{items.map(item => <TransactionHistoryRow item={item} key={item.id} />)}
		</tbody>
	)
}