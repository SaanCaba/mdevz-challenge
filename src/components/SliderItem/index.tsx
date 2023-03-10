import { motion } from 'framer-motion';
import React, { type Dispatch, type SetStateAction } from 'react';
import { type SliderContent } from '../../models/Profile.model';

import styles from './index.module.css';

interface Props {
	item: SliderContent;
	setSliderContent: Dispatch<SetStateAction<SliderContent[]>>;
	sliderContent: SliderContent[];
}

const SliderItem: React.FC<Props> = ({
	item,
	setSliderContent,
	sliderContent,
}) => {
	const onChangeColor = (id: number): void => {
		const grayArr = sliderContent.map((el) => {
			return {
				...el,
				color: '#2d2d2d',
			};
		});
		const yellowArr = grayArr.map((el) => {
			if (el.id === id) {
				return {
					...el,
					color: '#c4bc66',
				};
			} else {
				return {
					...el,
					color: el.color,
				};
			}
		});
		setSliderContent(yellowArr);
	};

	return (
		<motion.div
			onClick={() => onChangeColor(item.id)}
			className={styles.contItemSlider}>
			<div className={styles.contCenterLogo}>
				<div
					className={
						item.color === '#c4bc66' ? styles.contLogoSelected : styles.contLogo
					}>
					<item.logo.icon
						color={item.color === '#c4bc66' ? 'white' : '#2d2d2d'}
						size={25}
					/>
				</div>
			</div>
			<div className={styles.contNameItem}>
				<span className={styles.nameItem}>{item.name}</span>
			</div>
		</motion.div>
	);
};

export default SliderItem;
