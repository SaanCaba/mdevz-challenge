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
                exp: 43,
                id: 1,
            },
            {
                img: medal,
                irlaName: 'IRLA name here',
                irlaDesc: 'IRLA description here',
                exp: 43,
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
                exp: 43,
                id: 3,
            },
            {
                img: medal,
                irlaName: 'IRLA name here',
                irlaDesc: 'IRLA description here',
                exp: 43,
                id: 4,
            },
        ],
    },
]