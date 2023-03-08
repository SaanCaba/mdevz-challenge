import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</>
	);
};

export default App;
