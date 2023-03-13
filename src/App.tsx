import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './screens/Login';
import Logout from './components/Logout';
import Profile from './screens/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './screens/Register';
import ProfileCoin from './screens/ProfileMedal';

const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route
					path='/login'
					element={
						<div className='viewLogin'>
							<Logout />
							<Login />
						</div>
					}
				/>
				<Route path='/register' element={<Register />} />

				<Route
					path='/profile'
					element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/profile/:id'
					element={
						<ProtectedRoute>
							<ProfileCoin />
						</ProtectedRoute>
					}
				/>
				<Route path='*' element={<Navigate to='/profile' replace />} />
			</Routes>
		</>
	);
};

export default App;
