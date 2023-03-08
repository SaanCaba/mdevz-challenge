import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	type User,
} from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase.config';
import { type AuthUser } from '../models/AuthUser.model';

export const Context = createContext<AuthUser>({
	user: null,
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
	// const user = {
	// 	login: true,
	// };
	const [user, setUser] = useState<null | User>(null);
	const signup = async (email: string, password: string): Promise<void> => {
		console.log('123');
		// en response.proactiveRefresh.user.uid está el id del usuario guardado en firebase.
		const response: any = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		console.log(response);
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
			setUser(currentUser);
		});
	}, []);

	return (
		<Context.Provider value={{ user, signup, login, logout }}>
			{children}
		</Context.Provider>
	);
}
