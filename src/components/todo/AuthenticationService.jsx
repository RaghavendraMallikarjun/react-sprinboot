class AuthenticationService {
    
     registerSuccessfulLogin(username,password){
         sessionStorage.setItem('authenticatedUser',username)
         console.log('registered successful login');
     }

     logout(){
        sessionStorage.removeItem('authenticatedUser');
     }


     isUserLoggedIn(){
         let user=sessionStorage.getItem('authenticatedUser')
         if(user==null) return false
         return true
     }
}

export default new AuthenticationService();