export const TransactionHistoryRow = ({ item: { type, amount, currency } }) => {
	return (
		<tr>
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</tr>
	)
}