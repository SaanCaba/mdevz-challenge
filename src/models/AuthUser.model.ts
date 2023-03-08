import { type User } from "firebase/auth"

export interface AuthUser{
    user:User | null,
    signup: (email:string, password:string) => any
    login: (email:string, password:string) => Promise<void> | void
    logout:() => Promise<void> | void

}