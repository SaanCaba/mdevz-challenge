import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

interface PropsChildren {
	children: React.ReactNode;
}

const ProtectedRoute = ({ children }: PropsChildren): React.ReactElement => {
	const { loading } = useAuth();

	if (loading !== false) {
		console.log(loading);
		return <h1>Cargando...</h1>;
	}

	if (localStorage.getItem('user_token') === null) {
		return <Navigate to='/login' />;
	}

	return <>{children}</>;
};

export default ProtectedRoute;
