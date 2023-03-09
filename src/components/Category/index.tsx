import React from 'react';
import { type DataCategories } from '../../models/Profile.model';
import styles from './index.module.css';

interface Props {
	categoryEl: DataCategories;
}

const Category: React.FC<Props> = ({ categoryEl }) => {
	return (
		<div className={styles.contCategory}>
			<header className={styles.headerCategory}>
				<span style={{ fontWeight: 'bold' }}>{categoryEl.categoryType}</span>
				<span className={styles.seeAll}>See all</span>
			</header>
			<div className={styles.contMainMedals}>
				{categoryEl.coins.map((el, i) => {
					return (
						<div className={styles.contMedal} key={i}>
							<div className={styles.contImg}>
								<img className={styles.img} src={el.img} />
							</div>
							<div className={styles.contInfoMedal}>
								<span className={styles.irlaName}>{el.irlaName}</span>
								<span>{el.irlaDesc}</span>
								<span className={styles.xpText}>{el.exp} XP</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Category;
