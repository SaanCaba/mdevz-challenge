import React from 'react';
import { type StatisticsProfile } from '../../models/Profile.model';

import { BsFire } from 'react-icons/bs';
import { RiFlashlightFill } from 'react-icons/ri';
import { FaMedal } from 'react-icons/fa';
import { TbPlaystationTriangle } from 'react-icons/tb';

import StatisticItem from '../StatisticItem';

const statistics: StatisticsProfile[] = [
	{
		title: 27,
		content: 'Current streak',
		icon: {
			element: BsFire,
			color: '#f05959',
		},
	},
	{
		title: 23.233,
		content: 'Total XP',
		icon: {
			element: RiFlashlightFill,
			color: '#fcd305',
		},
	},
	{
		title: 'Apprentice',
		content: 'User Rank',
		icon: {
			element: FaMedal,
			color: '#ebca0e',
		},
	},
	{
		title: 2321,
		content: 'Total IRLAs',
		icon: {
			element: TbPlaystationTriangle,
			color: '#c4bc66',
		},
	},
];

const Statistics: React.FC = () => {
	return (
		<>
			{statistics.map((el, i) => {
				return <StatisticItem key={i} item={el} />;
			})}
		</>
	);
};

export default Statistics;
