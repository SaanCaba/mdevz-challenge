import { query,collection,where, getDocs, type DocumentData, type QuerySnapshot } from "firebase/firestore";
import { db } from "../firebase.config";
import { type UserDBInfo } from "../models/AuthUser.model";

export const getUserInfo = async (userId:string | undefined) : Promise<UserDBInfo> => {
    const q = query(
        collection(db, 'users'),
        where('user_id', '==', userId)
    );
    const querySnapshot : QuerySnapshot<DocumentData> = await getDocs(q);
    let userInfo : UserDBInfo  = {country: '', first_name: '', last_name: '', level: 1, user_id: ''}
    querySnapshot.forEach(doc => {
        userInfo  = doc.data() as UserDBInfo
    })
    return userInfo 
}
