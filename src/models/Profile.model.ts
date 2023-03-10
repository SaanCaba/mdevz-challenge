import { type IconType } from "react-icons";

export interface StatisticsProfile{
	icon: {
		element: IconType,
		color:string
	},
    title:string | number,
    content:string
}

export interface SliderContent {
	logo:{
		icon:IconType,
	},
	name:string,
	id:number,
	color:string
}

export interface DataCategories{
		categoryType: string,
		coins: Coins[]
}

export interface Coins {
	img: string,
	irlaName: string,
	irlaDesc: string,
	exp: 43,
	id:number
}