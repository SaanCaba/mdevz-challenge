import React from 'react';
import { useAuth } from '../../context/authContext';

const Profile: React.FC = () => {
	const { userProfileData } = useAuth();

	return (
		<div>
			<h1>{userProfileData?.first_name}</h1>
			<p>Location: {userProfileData?.country}</p>
		</div>
	);
};

export default Profile;
