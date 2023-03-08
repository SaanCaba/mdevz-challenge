import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useContext } from 'react';
import { auth } from '../firebase.config';
import { type AuthUser } from '../models/AuthUser.model';

export const Context = createContext<AuthUser>({
	user: {
		login: false,
	},
	signup() {},
});

export const useAuth = (): AuthUser => {
	const user = useContext<AuthUser>(Context);
	return user;
};

interface Props {
	children: React.ReactNode;
}

export function AuthProvider({ children }: Props): any {
	const user = {
		login: true,
	};
	const signup = async (email: string, password: string): Promise<any> => {
		console.log('123');
		// en response.proactiveRefresh.user.uid está el id del usuario guardado en firebase.
		const response: any = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		console.log(response);
	};
	return (
		<Context.Provider value={{ user, signup }}>{children}</Context.Provider>
	);
}
