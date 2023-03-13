import { FirebaseError } from 'firebase/app';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	type UserCredential,
	type User,
} from 'firebase/auth';
import { addDoc, collection, type DocumentData } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { dataCategories } from '../data/dataCategories';
import { auth, db } from '../firebase.config';
import { type UserRegisterData, type AuthUser } from '../models/AuthUser.model';
import { type Coins, type DataCategories } from '../models/Profile.model';
import { getOnlyCoins } from '../utils/getOnlyCoins';

import { getUserInfo } from '../utils/getUserInfo';
import { convertMessageLogin } from '../utils/handleErrorLogin';
import {
	convertMessageRegister,
	convertMessageRegisterUserDB,
} from '../utils/handleErrorRegister';

export const ContextApp = createContext<AuthUser>({
	userSession: null,
	userProfileData: null,
	signup() {},
	login() {},
	logout() {},
	loading: false,
	coinsData: [],
	getCoinById() {
		return null;
	},
});

export const useAuth = (): AuthUser => {
	const user = useContext<AuthUser>(ContextApp);
	return user;
};

interface Props {
	children: React.ReactNode;
}

export function AuthProvider({ children }: Props): React.ReactElement {
	const [userSession, setUserSession] = useState<null | User>(null);

	const [userProfileData, setUserProfileData] = useState<null | DocumentData>(
		null
	);

	const [loading, setLoading] = useState<boolean>(true);

	const [coinsData] = useState<DataCategories[]>(dataCategories);

	const signup = async (user: UserRegisterData): Promise<void | string> => {
		// en response.proactiveRefresh.user.uid está el id del usuario guardado en firebase.
		try {
			if (
				user.country.length === 0 ||
				user.firstName.length === 0 ||
				user.lastName.length === 0
			) {
				const errMessage = convertMessageRegisterUserDB(user);
				return errMessage;
			}
			const response: UserCredential = await createUserWithEmailAndPassword(
				auth,
				user.email,
				user.password
			);
			const userDb = {
				user_id: response.user.uid,
				country: user.country,
				first_name: user.firstName,
				last_name: user.lastName,
				level: 1,
			};
			const colRef = collection(db, 'users');
			await addDoc(colRef, userDb);
		} catch (error) {
			// capturamos el mensaje de error de Firebase (email, password)
			if (error instanceof FirebaseError) {
				const errMessage = convertMessageRegister(error.code);
				return errMessage;
			}
		}
	};

	const login = async (
		email: string,
		password: string
	): Promise<void | string> => {
		try {
			const userCredentials: UserCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const acessToken = await userCredentials.user.getIdToken();
			localStorage.setItem('user_token', acessToken);
		} catch (error) {
			if (error instanceof FirebaseError) {
				const errMessage = convertMessageLogin(error.code);
				return errMessage;
			}
		}
	};

	const logout = async (): Promise<void> => {
		await signOut(auth);
		localStorage.removeItem('user_token');
	};

	const getCoinById = (id: string): Coins | null => {
		const allCoins = getOnlyCoins();
		const coin = allCoins.find((el) => el.id === Number(id));
		if (coin === undefined) {
			return null;
		}
		return coin;
	};

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			if (currentUser === null) {
				setLoading(false);
				return;
			}
			setUserSession(currentUser);
			void (async () => {
				(await getUserInfo(currentUser?.uid)).forEach((doc) => {
					setUserProfileData(doc.data());
					setLoading(false);
				});
			})();
		});
	}, [userSession]);

	return (
		<ContextApp.Provider
			value={{
				userSession,
				userProfileData,
				signup,
				login,
				logout,
				loading,
				coinsData,
				getCoinById,
			}}>
			{children}
		</ContextApp.Provider>
	);
}
