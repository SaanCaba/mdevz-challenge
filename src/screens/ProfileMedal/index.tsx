import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const ProfileCoin: React.FC = () => {
	const { id } = useParams();
	const { coinSelected, getCoinById } = useAuth();
	useEffect(() => {
		if (id !== undefined) {
			getCoinById(id);
		}
	}, []);
	console.log(coinSelected);
	return (
		<>
			<h1>{coinSelected.irlaDesc}</h1>
		</>
	);
};

export default ProfileCoin;
