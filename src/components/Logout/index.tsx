import React from 'react';
import { useAuth } from '../../context/authContext';

const Logout: React.FC = () => {
	const { logout } = useAuth();
	return (
		<div>
			<button
				onClick={() => {
					logout();
				}}>
				Logout
			</button>
		</div>
	);
};

export default Logout;
