import medal from '../assets/medaus.png';
import { type DataCategories } from '../models/Profile.model';

export const dataCategories : DataCategories[] = [
    {
        categoryType: 'Featured Category',
        coins: [
            {
                img: medal,
                irlaName: 'IRLA name here',
                irlaDesc: 'IRLA description here',
                exp: 3343,
                id: 1,
            },
            {
                img: medal,
                irlaName: 'IRLA name here',
                irlaDesc: 'IRLA description here',
                exp: 32143,
                id: 2,
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
                exp: 312343,
                id: 3,
            },
            {
                img: medal,
                irlaName: 'IRLA name here',
                irlaDesc: 'IRLA description here',
                exp: 132343,
                id: 4,
            },
        ],
    },
]