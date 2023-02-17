import HeadRowItem from "./HeadRowItem";

const HeadRow = ({ transactions }) => {
	return (
		<tr className="head-row">
			{transactions.map(({ type, id }) => <HeadRowItem types={type} key={id} />)}
		</tr>
	)
}

export default HeadRow;