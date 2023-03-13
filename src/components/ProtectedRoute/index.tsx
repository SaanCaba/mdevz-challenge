import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

import styles from './index.module.css';

interface PropsChildren {
	children: React.ReactNode;
}

const ProtectedRoute = ({ children }: PropsChildren): React.ReactElement => {
	const { loading } = useAuth();

	if (loading) {
		return (
			<div className={styles.contLoaderCol}>
				<div className={styles.contContentLoader}>
					<div className={styles.contSpinner}>
						<div className={styles.loadSpinner}></div>
					</div>
					<h1>Loading...</h1>
				</div>
				{/* <div className={styles.contLoaderCol}>
					<div className={styles.contSpinner}>
						<div className={styles.loadSpinner}></div>
					</div>
					<h1>Cargando...</h1>
				</div> */}
			</div>
		);
	}

	if (localStorage.getItem('user_token') === null) {
		return <Navigate to='/login' />;
	}

	return <>{children}</>;
};

export default ProtectedRoute;
