import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal, { type SweetAlertResult } from 'sweetalert2';
import { useAuth } from '../../context/authContext';

import styles from './index.module.css';

const Login: React.FC = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [loading, setLoading] = useState<boolean>(false);

	const auth = useAuth();

	const navigate = useNavigate();

	// console.log('user', auth.user);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void | SweetAlertResult<any>> => {
		e.preventDefault();
		try {
			setLoading(true);
			const errorResponse: string | void = await auth.login(
				user.email,
				user.password
			);
			if (errorResponse !== undefined) {
				console.log(errorResponse);
				return await Swal.fire({
					text: errorResponse,
				});
			}
			navigate('/profile');
		} catch (error) {
		} finally {
			setLoading(false);
		}
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
					<button disabled={loading} type='submit'>
						Log In
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
