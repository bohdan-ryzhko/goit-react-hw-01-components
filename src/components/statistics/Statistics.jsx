import { StatisticsTitle } from "./StatisticsTitle";
import { StatList } from "./StatList";
import css from "./Statistics.module.css";


export const Statistics = ({ title, stats }) => {
	return (
		<section className={`${css.statistics} section`}>
			<StatisticsTitle>{title}</StatisticsTitle>
			<StatList stats={stats} />
		</section>
	)
}