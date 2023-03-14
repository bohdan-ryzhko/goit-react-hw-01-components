import css from "./Statistics.module.css";

export const StatsItem = ({ stat: { label, percentage, backgroundColor } }) => {
	return (
		<li className={css[backgroundColor]}>
			<span className={css.label}>{label}</span>
			<span className={css.percentage}>{percentage}%</span>
		</li>
	)
}
