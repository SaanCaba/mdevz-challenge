import { dataCategories } from "../data/dataCategories";
import { type Coins } from "../models/Profile.model";
// import { type Coins } from "../models/Profile.model";

export const getOnlyCoins = ():Coins[] => {
    const coinsArr : Coins[]  = []
    for(let i =0; i< dataCategories.length; i++){
        for(let j = 0; j < dataCategories[i].coins.length; j++){
            coinsArr.push(dataCategories[i].coins[j])
        }
    }
    return coinsArr;
  
}