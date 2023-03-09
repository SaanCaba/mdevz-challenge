import React from 'react';
import { type StatisticsProfile } from '../../models/Profile.model';

import styles from './index.module.css';

const statistics: StatisticsProfile[] = [
	{
		title: 27,
		content: 'Current streak',
	},
	{
		title: 23.233,
		content: 'Total XP',
	},
	{
		title: 'Apprentice',
		content: 'User Rank',
	},
	{
		title: 2321,
		content: 'Total IRLAs',
	},
];

const Statistics: React.FC = () => {
	return (
		<>
			{statistics.map((el, i) => {
				return (
					<div className={styles.contStatistics} key={i}>
						<div className={styles.contIcon}>{'icon'}</div>
						<div className={styles.contStatisticsInfo}>
							<span className={styles.title}>{el.title}</span>
							<span className={styles.content}>{el.content}</span>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Statistics;
