import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import styles from './index.module.css';

const sliderContent = [
	{
		logo: 'logo',
		name: 'Others',
	},
	{
		logo: 'logo',
		name: 'Board Gaming',
	},
	{
		logo: 'logo',
		name: 'Video Gaming',
	},
	{
		logo: 'logo',
		name: 'Reading',
	},
	{
		logo: 'logo',
		name: 'Self Care',
	},
	{
		logo: 'logo',
		name: 'Comments',
	},
];

const Slider: React.FC = () => {
	const [width, setWidth] = useState<number>(0);
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
						<motion.div className={styles.contItemSlider} key={i}>
							<div className={styles.contCenterLogo}>
								<div className={styles.contLogo}>{'logo'}</div>
							</div>
							<div className={styles.contNameItem}>
								<span className={styles.nameItem}>{el.name}</span>
							</div>
						</motion.div>
					);
				})}
			</motion.div>
		</motion.div>
	);
};

export default Slider;
