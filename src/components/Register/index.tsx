import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import type CountryMapped from '../../models/Country.model';
import { getCountry } from '../../utils/getCountrys';
import styles from './index.module.css';

const Register: React.FC = () => {
	const [countrys] = useState<CountryMapped[]>(getCountry());

	const auth = useAuth();

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
			await auth.signup(user);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={styles.contForm}>
			<form
				onSubmit={(e) => {
					void handleSubmit(e);
				}}
				className={styles.formRegistro}>
				<div className={styles.contInput}>
					<label>First Name:</label>
					<input
						onChange={(e) => {
							handleChange(e);
						}}
						className={styles.inputRegistro}
						type='text'
					/>
				</div>
				<div className={styles.contInput}>
					<label>Last Name:</label>
					<input
						onChange={(e) => {
							handleChange(e);
						}}
						className={styles.inputRegistro}
						type='text'
					/>
				</div>
				<div className={styles.contSelect}>
					<label>Country: </label>
					<select
						onChange={(e) => {
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
							handleChange(e);
						}}
						className={styles.inputRegistro}
						type='password'
					/>
				</div>
				<div>
					<button type='submit'>Register</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
