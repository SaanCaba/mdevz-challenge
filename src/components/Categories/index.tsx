import React from 'react';

import styles from './index.module.css';

import medal from '../../assets/medaus.png.png';
import { type DataCategories } from '../../models/Profile.model';
import Category from '../Category';

const dataCategories: DataCategories[] = [
	{
		categoryType: 'Featured Category',
		coins: [
			{
				img: medal,
				irlaName: 'IRLA name here',
				irlaDesc: 'IRLA description here',
				exp: 43,
			},
			{
				img: medal,
				irlaName: 'IRLA name here',
				irlaDesc: 'IRLA description here',
				exp: 43,
			},
		],
	},
	{
		categoryType: 'Favorite Category',
		coins: [
			{
				img: medal,
				irlaName: 'IRLA name here',
				irlaDesc: 'IRLA description here',
				exp: 43,
			},
			{
				img: medal,
				irlaName: 'IRLA name here',
				irlaDesc: 'IRLA description here',
				exp: 43,
			},
		],
	},
];

const Categories: React.FC = () => {
	return (
		<div className={styles.contCategories}>
			{dataCategories.map((el, i) => {
				return <Category key={i} categoryEl={el} />;
			})}
		</div>
	);
};

export default Categories;
