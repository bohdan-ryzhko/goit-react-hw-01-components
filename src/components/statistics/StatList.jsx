import StatListItem from "./StatListItem";

const StatList = ({ stats }) => {
	return (
		<ul className="stat-list">
			{stats.map(stat => <StatListItem stats={stat} key={stat.id} />)}
		</ul>
	)
}

export default StatList;