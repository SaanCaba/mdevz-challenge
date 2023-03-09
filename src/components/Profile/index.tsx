import React from 'react';
import { useAuth } from '../../context/authContext';

import styles from './index.module.css';
import Statistics from './Statistics';

const Profile: React.FC = () => {
	const { userProfileData } = useAuth();

	return (
		<div className={styles.contProfileView}>
			<header className={styles.headerProfile}>
				<p className={styles.backHomeProfile}>Back Home</p>
				<span>Profile</span>
			</header>
			<main className={styles.mainContentProfile}>
				<section className={styles.sectionProfileInfo}>
					<div className={styles.divContImg}>
						<img src='https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg' />
					</div>
					<span>
						{userProfileData?.first_name} {userProfileData?.last_name}{' '}
						{'{LOGO DE VERIFICADO}'}
					</span>
					<span>
						{'{ubicacion icon}'} {userProfileData?.country}
					</span>
					<span>{'{logo}'}Tracking 13 IRLAs</span>
				</section>
				<section className={styles.sectionButtons}>
					<button className={styles.btnFollow}>
						<span>+</span> Follow
					</button>
					<button className={styles.btnTracked}>{'L'} Tracked IRLAs</button>
				</section>
				<section className={styles.sectionStatistics}>
					<Statistics />
				</section>
				<section></section>
			</main>
		</div>
	);
};

export default Profile;
