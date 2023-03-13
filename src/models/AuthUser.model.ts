import { type User } from "firebase/auth"
import { type DocumentData } from "firebase/firestore"
import { type Coins, type DataCategories } from "./Profile.model"

export interface AuthUser{
    userSession:User | null,
    signup: (user:UserRegisterData) => Promise<string | void> | void
    login: (email:string, password:string) => Promise<string | void> | void
    logout:() => Promise<void> | void
    getCoinById: (id:string) => Coins | null
    userProfileData: DocumentData | null
    loading: boolean
    coinsData: [] | DataCategories[]
}

export interface UserRegisterData{
    email: string,
    password: string,
    country: string,
    firstName: string,
    lastName: string
}