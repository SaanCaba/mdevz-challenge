import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Register';

const App: React.FC = () => {
	return (
		<>
			<Logout />
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />

				<Route
					path='/profile'
					element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</>
	);
};

export default App;
