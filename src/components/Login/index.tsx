import React from 'react';

import styles from './index.module.css';

const Login: React.FC = () => {
	return (
		<div className={styles.contLoginForm}>
			<form className={styles.formLogin}>
				<div>
					<label>Email: </label>
					<input className={styles.input} type='text' />
				</div>
				<div>
					<label>Password: </label>
					<input className={styles.input} type='password' />
				</div>
			</form>
		</div>
	);
};

export default Login;
