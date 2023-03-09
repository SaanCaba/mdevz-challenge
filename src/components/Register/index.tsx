import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../../context/authContext';
import type CountryMapped from '../../models/Country.model';
import { getCountry } from '../../utils/getCountrys';
import styles from './index.module.css';

const Register: React.FC = () => {
	const [countrys] = useState<CountryMapped[]>(getCountry());
	const [loading, setLoading] = useState<boolean>(false);
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
				return await Swal.fire({
					text: errorResponse,
				});
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
						name='firstName'
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
						name='lastName'
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
					<button disabled={loading} type='submit'>
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
