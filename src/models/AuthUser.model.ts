import { type User } from "firebase/auth"
import { type DocumentData } from "firebase/firestore"

export interface AuthUser{
    userSession:User | null,
    signup: (user:UserRegisterData) => Promise<string | void> | void
    login: (email:string, password:string) => Promise<string | void> | void
    logout:() => Promise<void> | void
    userProfileData: DocumentData | null
    loading: boolean
}

export interface UserRegisterData{
    email: string,
    password: string,
    country: string,
    firstName: string,
    lastName: string
}