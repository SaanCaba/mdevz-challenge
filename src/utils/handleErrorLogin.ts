type ErrorMessage = string

export function convertMessageLogin(code:string) : ErrorMessage{
    console.log(code)
     switch(code){
       case 'auth/user-disabled': {
         return 'Sorry your user is disabled.';
     }
     case 'auth/invalid-email': {
         return 'Bad email, try again.';
     }
     case 'auth/wrong-password':{
      return 'Sorry, wrong password.'
     }
     case 'auth/user-not-found':{
      return 'Sorry, your email is incorrect.'
     }
     case 'auth/internal-error':{
      return 'Sorry, there are fields without filling in.'
     }
     default: {
         return 'Login error try again later.';
     }
     }
   }

