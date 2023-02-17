import PropTypes from 'prop-types';

const BodyRow = ({ transaction: { type, amount, currency } }) => {
	return (
		<tr className="body__row">
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</tr>
	)
}

BodyRow.propTypes = {
	type: PropTypes.string,
	amount: PropTypes.string,
	currency: PropTypes.string,
}

export default BodyRow;