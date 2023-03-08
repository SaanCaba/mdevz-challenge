export interface AuthUser{
    user:{
        login:boolean
    },
    signup: (email:string, password:string) => any
}