import { query,collection,where, getDocs, type DocumentData, type QuerySnapshot } from "firebase/firestore";
import { db } from "../firebase.config";

export const getUserInfo = async (userId:string | undefined) : Promise<QuerySnapshot<DocumentData>> => {
    const q = query(
        collection(db, 'users'),
        where('user_id', '==', userId)
    );
    const querySnapshot : QuerySnapshot<DocumentData> = await getDocs(q);
    return querySnapshot
}
