import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const Logout: React.FC = () => {
	const { logout } = useAuth();
	const navigate = useNavigate();
	return (
		<div>
			<button
				onClick={() => {
					void logout();
					navigate('/login');
				}}>
				Logout
			</button>
		</div>
	);
};

export default Logout;
