import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

import styles from './index.module.css';

const Logout: React.FC = () => {
	const { logout } = useAuth();
	const navigate = useNavigate();
	const [auth, setAuth] = useState<string | null>(null);
	useEffect(() => {
		const token: null | string = localStorage.getItem('user_token');

		setAuth(token);
	}, []);
	return (
		<div className={styles.contLogout}>
			<button
				className={typeof auth !== 'string' ? styles.noauth : styles.btnLogout}
				onClick={() => {
					void logout();
					navigate('/login');
					window.location.reload();
				}}>
				Logout
			</button>
		</div>
	);
};

export default Logout;
