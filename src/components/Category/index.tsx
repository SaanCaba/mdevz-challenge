import React from 'react';
import { type DataCategories } from '../../models/Profile.model';
import styles from './index.module.css';

import { TbPlaystationTriangle } from 'react-icons/tb';
import { RiFlashlightFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

interface Props {
	categoryEl: DataCategories;
}

const Category: React.FC<Props> = ({ categoryEl }) => {
	return (
		<div>
			<header className={styles.headerCategory}>
				<span className={styles.categoryTypeText}>
					{categoryEl.categoryType}
				</span>
				<span className={styles.seeAll}>See all</span>
			</header>
			<div className={styles.contMainMedals}>
				{categoryEl.coins.map((el, i) => {
					return (
						<Link
							to={`/profile/${el.id}`}
							key={i}
							style={{ textDecoration: 'none', cursor: 'pointer' }}>
							<div className={styles.contMedal}>
								<div className={styles.contImg}>
									<TbPlaystationTriangle
										className={styles.iconImg}
										color='#c4bc66'
										size={18}
									/>
									<img className={styles.img} src={el.img} />
								</div>
								<div className={styles.contInfoMedal}>
									<span className={styles.irlaName}>{el.irlaName}</span>
									<span>{el.irlaDesc}</span>
									<span className={styles.xpText}>
										<RiFlashlightFill color='#fcd305' />
										{el.exp} XP
									</span>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Category;
