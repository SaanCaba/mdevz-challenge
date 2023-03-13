import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

import styles from './index.module.css';

const Login: React.FC = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');
	const [loading, setLoading] = useState<boolean>(false);

	const auth = useAuth();

	const navigate = useNavigate();

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
		try {
			setLoading(true);
			const errorResponse: string | void = await auth.login(
				user.email,
				user.password
			);
			if (errorResponse !== undefined) {
				return setError(errorResponse);
			}
			navigate('/profile');
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={styles.contLoginForm}>
			<div className={styles.contFormTitle}>
				<h1>Login</h1>

				<form
					onSubmit={(e) => {
						void handleSubmit(e);
					}}
					className={styles.formLogin}>
					<div>
						<label className={styles.label}>Email: </label>
						<input
							autoFocus
							onChange={(e) => {
								setError('');
								handleChange(e);
							}}
							className={styles.input}
							type='email'
							name='email'
						/>
					</div>
					<div>
						<label className={styles.label}>Password: </label>
						<input
							onChange={(e) => {
								setError('');
								handleChange(e);
							}}
							className={styles.input}
							type='password'
							name='password'
						/>
					</div>
					<div className={styles.contError}>
						{error.length > 0 && <span>{error}</span>}
					</div>

					<div>
						<Link style={{ color: 'black' }} to='/register'>
							<span>Do you not have an account?</span>
						</Link>
						<button className={styles.btn} disabled={loading} type='submit'>
							Log In
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
