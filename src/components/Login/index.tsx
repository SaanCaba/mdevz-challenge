import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';

import styles from './index.module.css';

const Login: React.FC = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const auth = useAuth();
	// console.log('user', auth.user);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();
		auth.login(user.email, user.password);
	};

	return (
		<div className={styles.contLoginForm}>
			<form
				onSubmit={(e) => {
					void handleSubmit(e);
				}}
				className={styles.formLogin}>
				<div>
					<label>Email: </label>
					<input
						onChange={(e) => {
							handleChange(e);
						}}
						className={styles.input}
						type='email'
						name='email'
					/>
				</div>
				<div>
					<label>Password: </label>
					<input
						onChange={(e) => {
							handleChange(e);
						}}
						className={styles.input}
						type='password'
						name='password'
					/>
				</div>
				<div>
					<button type='submit'>Log In</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
