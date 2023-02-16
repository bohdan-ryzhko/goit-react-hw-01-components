const StatListItem = ({ stats: { label, percentage, background } }) => {
	return (
		<li style={{backgroundColor: `${background}`}} className="stats-list__item">
			<span className="label">{label}</span>
			<span className="percentage">{percentage}%</span>
		</li>
	)
}

export default StatListItem;