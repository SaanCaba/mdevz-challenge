import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { type SliderContent } from '../../models/Profile.model';

import { IoMdSettings, IoIosPerson } from 'react-icons/io';
import { GiRollingDices } from 'react-icons/gi';
import { MdVideogameAsset } from 'react-icons/md';
import { GoBook } from 'react-icons/go';
import { TfiComments } from 'react-icons/tfi';

import styles from './index.module.css';
import SliderItem from '../SliderItem';

const sliderCont: SliderContent[] = [
	{
		logo: {
			icon: IoMdSettings,
		},
		name: 'Settings',
		id: 1,
		color: '#2d2d2d',
	},
	{
		logo: {
			icon: GiRollingDices,
		},
		name: 'Board Gaming',
		id: 2,
		color: '#2d2d2d',
	},
	{
		logo: {
			icon: MdVideogameAsset,
		},
		name: 'Video Gaming',
		id: 3,
		color: '#2d2d2d',
	},
	{
		logo: {
			icon: GoBook,
		},
		name: 'Reading',
		id: 4,
		color: '#2d2d2d',
	},
	{
		logo: {
			icon: IoIosPerson,
		},
		name: 'Self Care',
		id: 5,
		color: '#2d2d2d',
	},
	{
		logo: {
			icon: TfiComments,
		},
		name: 'Comments',
		id: 6,
		color: '#2d2d2d',
	},
];

const Slider: React.FC = () => {
	const [width, setWidth] = useState<number>(0);
	const [sliderContent, setSliderContent] = useState(sliderCont);
	const refCarousel = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (
			refCarousel.current?.scrollWidth !== undefined &&
			refCarousel.current?.offsetWidth !== undefined
		) {
			setWidth(
				refCarousel.current?.scrollWidth - refCarousel.current?.offsetWidth
			);
		}
	}, []);

	return (
		<motion.div ref={refCarousel} className={styles.carousel}>
			<motion.div
				drag='x'
				dragConstraints={{ right: 0, left: -width }}
				className={styles.innerCarousel}>
				{sliderContent.map((el, i) => {
					return (
						<SliderItem
							sliderContent={sliderContent}
							setSliderContent={setSliderContent}
							key={i}
							item={el}
						/>
					);
				})}
			</motion.div>
		</motion.div>
	);
};

export default Slider;
