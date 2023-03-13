import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { BsArrowLeft } from 'react-icons/bs';
import { FiUpload } from 'react-icons/fi';
import { TbTargetArrow } from 'react-icons/tb';
import { RiFlashlightFill } from 'react-icons/ri';

import styles from './index.module.css';
import { type Coins } from '../../models/Profile.model';

const ProfileCoin: React.FC = () => {
	const { id } = useParams();
	const { getCoinById } = useAuth();
	const navigation = useNavigate();
	const [coinSelected, setSelected] = useState<null | Coins>();
	useEffect((): any => {
		if (id !== undefined) {
			const coin = getCoinById(id);
			setSelected(coin);
			if (coin === null) {
				return navigation('/profile');
			}
		}
	}, []);
	return (
		<div className={styles.contProfileMedalView}>
			<header className={styles.header}>
				<Link style={{ cursor: 'pointer', color: 'black' }} to='/profile'>
					<span className={styles.backProfile}>
						<BsArrowLeft />
					</span>
				</Link>
				<span className={styles.headerText}>Digital IRLA</span>
				<span className={styles.uploadCoin}>
					<FiUpload />
				</span>
			</header>
			<main className={styles.mainContent}>
				<section className={styles.sectionImg}>
					<img
						className={styles.imgCoin}
						src={coinSelected?.img}
						alt='image coin'
					/>
				</section>
				<span className={styles.text3D}>View IRLA in 3D</span>
				<section className={styles.sectionInfoCoin}>
					<div className={styles.infoCoin}>
						<div className={styles.infoCoinBox}>
							<span className={styles.irlaName} style={{ fontWeight: 'bold' }}>
								{coinSelected?.irlaName}
							</span>
							<span style={{ fontWeight: 'bold' }}>
								<RiFlashlightFill color='#fcd305' /> {coinSelected?.exp}
							</span>
							<div>
								<span>Completed: </span>{' '}
								<span style={{ fontWeight: 'bold' }}>34 times</span>
							</div>
						</div>
						<button className={styles.trackBtn}>
							<TbTargetArrow size={16} />
							<span>Track</span>
						</button>
						<hr />
						<div className={styles.textMainCoin}>
							<span>The coins of World</span>
						</div>
						<div className={styles.contDescription}>
							<p>
								IRLA description here 2020 America silver Eagle fresh from the
								US Mint SHipped to you sealed in direct fit air tite coin
								holder. Issued in 1986, the american Silver Eagle is the
								official fold builion coin of the United States
							</p>
						</div>
						<div className={styles.contBtnLogIRLA}>
							<button>Log IRLA</button>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default ProfileCoin;
