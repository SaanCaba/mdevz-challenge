import React from 'react';
import Categories from '../../components/Categories';
import { useAuth } from '../../context/authContext';

import styles from './index.module.css';
import Slider from '../../components/Slider';
import Statistics from '../../components/Statistics';

import { MdVerified } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { TbTargetArrow } from 'react-icons/tb';
import { BsArrowLeft } from 'react-icons/bs';

const Profile: React.FC = () => {
	const { userProfileData } = useAuth();

	return (
		<div className={styles.contProfileView}>
			<header className={styles.headerProfile}>
				<p className={styles.backHomeProfile}>
					<BsArrowLeft size={14} />
				</p>
				<span>Profile</span>
			</header>
			<main className={styles.mainContentProfile}>
				<section className={styles.sectionProfileInfo}>
					<div className={styles.divContImg}>
						<img src='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg' />
					</div>
					<span className={styles.fullName}>
						{userProfileData?.first_name} {userProfileData?.last_name}{' '}
						<MdVerified color='#57a9fa' />
					</span>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
						}}>
						<IoLocationSharp size={17} color='#ccb883' />{' '}
						<span className={styles.countryText}>
							{userProfileData?.country}
						</span>
					</div>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
						}}>
						<TbTargetArrow color='#11b981' size={20} />{' '}
						<span className={styles.infoProfileText}>Tracking 13 IRLAs</span>
					</div>
				</section>
				<section className={styles.sectionButtons}>
					<button className={styles.btnFollow}>
						<div className={styles.contFlexBtnFollow}>
							<h1>+</h1>
							<span className={styles.followText}>Follow</span>
						</div>
					</button>
					<button className={styles.btnTracked}>
						<TbTargetArrow size={17} />
						<span className={styles.trackedIrlasText}>Tracked IRLAs</span>
					</button>
				</section>
				<section className={styles.sectionStatistics}>
					<Statistics />
				</section>
				<section>
					<Slider />
				</section>
				<section className={styles.sectionFilterIrlas}>
					<button>All IRLAS</button>
				</section>
				<section>
					<Categories />
				</section>
			</main>
		</div>
	);
};

export default Profile;
