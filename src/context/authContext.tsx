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
export const Context = createContext<AuthUser>({
	userSession: null,
	userProfileData: null,
	signup() {},
	login() {},
	logout() {},
});

export const useAuth = (): AuthUser => {
	const user = useContext<AuthUser>(Context);
	return user;
};

interface Props {
	children: React.ReactNode;
}

export function AuthProvider({ children }: Props): any {
	const [userSession, setUserSession] = useState<null | User>(null);
	const [userProfileData, setUserProfileData] = useState<null | DocumentData>(
		null
	);
	const signup = async (user: UserRegisterData): Promise<void> => {
		// en response.proactiveRefresh.user.uid está el id del usuario guardado en firebase.
		try {
			const response: UserCredential = await createUserWithEmailAndPassword(
				auth,
				user.email,
				user.password
			);
			console.log(response);
			const userDb = {
				user_id: response.user.uid,
				country: user.country,
				first_name: user.firstName,
				last_name: user.lastName,
			};
			const colRef = collection(db, 'users');
			await addDoc(colRef, userDb);
		} catch (error) {
			console.log(error);
		}
	};

	const login = async (email: string, password: string): Promise<any> => {
		await signInWithEmailAndPassword(auth, email, password);
		// console.log(userCredentials.user);
	};

	const logout = async (): Promise<any> => {
		await signOut(auth);
	};

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			if (currentUser === null) return;
			void (async () => {
				setUserSession(currentUser);
				(await getUserInfo(currentUser?.uid)).forEach((doc) => {
					console.log(doc.data());
					setUserProfileData(doc.data());
				});
			})();
		});
	}, []);

	return (
		<Context.Provider
			value={{ userSession, userProfileData, signup, login, logout }}>
			{children}
		</Context.Provider>
	);
}
