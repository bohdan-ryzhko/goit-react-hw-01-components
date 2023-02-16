import StatList from "./StatList";

const Statistics = ({title, stats}) => {
	return (
		<section className="statistics">
			<h2 className="title">{title ?? "Stats"}</h2>
			<StatList stats={stats} />
		</section>
	)
}

export default Statistics;