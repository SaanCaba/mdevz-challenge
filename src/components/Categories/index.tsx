import React from 'react';

import styles from './index.module.css';

import Category from '../Category';
import { useAuth } from '../../context/authContext';

const Categories: React.FC = () => {
	const { coinsData } = useAuth();
	return (
		<div className={styles.contCategories}>
			{coinsData.map((el, i) => {
				return <Category key={i} categoryEl={el} />;
			})}
		</div>
	);
};

export default Categories;
