import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import type CountryMapped from '../../models/Country.model';
import { getCountry } from '../../utils/getCountrys';
import styles from './index.module.css';

const Register: React.FC = () => {
	const [countrys] = useState<CountryMapped[]>(getCountry());
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState('');

	const auth = useAuth();

	const navigate = useNavigate();

	const [user, setUser] = useState({
		email: '',
		password: '',
		country: '',
		firstName: '',
		lastName: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<any> => {
		e.preventDefault();
		try {
			setLoading(true);
			const errorResponse: string | void = await auth.signup(user);
			if (errorResponse !== undefined) {
				console.log('err', errorResponse);
				return setError(errorResponse);
			}
			// console.log(response);
			navigate('/login');
		} catch (error: any) {
			console.log(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={styles.contForm}>
			<div className={styles.contFormTitle}>
				<h1>Register</h1>
				<form
					onSubmit={(e) => {
						void handleSubmit(e);
					}}
					className={styles.formRegistro}>
					<div className={styles.contInput}>
						<label>First Name:</label>
						<input
							onChange={(e) => {
								setError('');
								handleChange(e);
							}}
							className={styles.inputRegistro}
							type='text'
							name='firstName'
						/>
					</div>
					<div className={styles.contInput}>
						<label>Last Name:</label>
						<input
							onChange={(e) => {
								setError('');
								handleChange(e);
							}}
							className={styles.inputRegistro}
							type='text'
							name='lastName'
						/>
					</div>
					<div className={styles.contSelect}>
						<label>Country: </label>
						<select
							onChange={(e) => {
								setError('');
								if (e.target.value === 'Countrys') {
									return;
								}
								setUser({
									...user,
									country: e.target.value,
								});
							}}
							className={styles.selectCountrys}>
							<option>Countrys</option>
							{countrys.map((c, i) => {
								return (
									<option key={c.id} value={c.name}>
										{c.name}
									</option>
								);
							})}
						</select>
					</div>
					<div className={styles.contInput}>
						<label htmlFor=''>Email:</label>
						<input
							name='email'
							value={user.email}
							onChange={(e) => {
								setError('');
								handleChange(e);
							}}
							className={styles.inputRegistro}
							type='email'
						/>
					</div>
					<div className={styles.contInput}>
						<label htmlFor=''>Password:</label>
						<input
							name='password'
							value={user.password}
							onChange={(e) => {
								setError('');
								handleChange(e);
							}}
							className={styles.inputRegistro}
							type='password'
						/>
					</div>
					<div className={styles.contError}>
						{error.length > 0 && <span>{error}</span>}
					</div>

					<div>
						<Link style={{ color: 'black' }} to='/login'>
							<span>Do you have an account?</span>
						</Link>
						<button className={styles.btn} disabled={loading} type='submit'>
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
