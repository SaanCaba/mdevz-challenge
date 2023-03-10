import React from 'react';
import { type StatisticsProfile } from '../../models/Profile.model';
import styles from './index.module.css';

interface Props {
	item: StatisticsProfile;
}

const StatisticItem: React.FC<Props> = ({ item }) => {
	return (
		<div className={styles.contStatistics}>
			<div className={styles.contIcon}>
				<item.icon.element color={item.icon.color} size={22} />
			</div>
			<div className={styles.contStatisticsInfo}>
				<span className={styles.title}>{item.title}</span>
				<span className={styles.content}>{item.content}</span>
			</div>
		</div>
	);
};

export default StatisticItem;
