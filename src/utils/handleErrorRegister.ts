import { type UserRegisterData } from "../models/AuthUser.model";

type ErrorMessage = string

export function convertMessageRegister(code:string) : ErrorMessage{
     switch(code){
       case 'auth/user-disabled': {
         return 'Sorry your user is disabled.';
     }
     case 'auth/invalid-email': {
         return 'Bad email, try again.';
     }
     case 'auth/weak-password': {
       return 'Sorry, incorrect password entered. Please try again. (more than 6 characters)';
     }
     case 'auth/email-already-in-use':{
       return 'Sorry, this email name is already taken.'
     }
     default: {
         return 'Register error try again later.';
     }
     }
   }

export function convertMessageRegisterUserDB(user:UserRegisterData): ErrorMessage{
  if(user.firstName.length === 0){
      return 'Sorry, the First Name field is empty.'
    }
    else if(user.lastName.length === 0){
      return 'Sorry, the Last Name field is empty.'
    }
    else if(user.country.length === 0){
      return 'Sorry, the country field is empty.'
    }
    else{
      return 'Register error try again later.'
    }
  }