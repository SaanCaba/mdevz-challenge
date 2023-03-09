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
import { auth, db } from '../firebase.config';
import { type UserRegisterData, type AuthUser } from '../models/AuthUser.model';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getUserInfo } from '../utils/getUserInfo';
import { convertMessageLogin } from '../utils/handleErrorLogin';
import {
	convertMessageRegister,
	convertMessageRegisterUserDB,
} from '../utils/handleErrorRegister';
export const Context = createContext<AuthUser>({
	userSession: null,
	userProfileData: null,
	signup() {},
	login() {},
	logout() {},
	loading: false,
});

export const useAuth = (): AuthUser => {
	const user = useContext<AuthUser>(Context);
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
			};
			const colRef = collection(db, 'users');
			await addDoc(colRef, userDb);
		} catch (error: any) {
			// capturamos el mensaje de error de Firebase (email, password)
			const errMessage = convertMessageRegister(error.code);
			return errMessage;
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
		} catch (error: any) {
			const errMessage = convertMessageLogin(error.code);
			return errMessage;
		}
	};

	const logout = async (): Promise<any> => {
		await signOut(auth);
		localStorage.removeItem('user_token');
	};

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			if (currentUser === null) {
				setLoading(false);
				return;
			}
			void (async () => {
				setUserSession(currentUser);
				(await getUserInfo(currentUser?.uid)).forEach((doc) => {
					setUserProfileData(doc.data());
					setLoading(false);
				});
			})();
		});
	}, []);

	return (
		<Context.Provider
			value={{ userSession, userProfileData, signup, login, logout, loading }}>
			{children}
		</Context.Provider>
	);
}
