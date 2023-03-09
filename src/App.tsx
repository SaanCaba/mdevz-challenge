import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Register from './components/Register';
import { useAuth } from './context/authContext';

const App: React.FC = () => {
	const { loading } = useAuth();
	return (
		<>
			{loading ? (
				<h1>Cargando...</h1>
			) : (
				<>
					<Logout />
					<Routes>
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/profile' element={<Profile />} />
					</Routes>
				</>
			)}
		</>
	);
};

export default App;
