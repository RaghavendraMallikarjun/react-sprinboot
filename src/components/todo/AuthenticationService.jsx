class AuthenticationService {
    
     registerSuccessfulLogin(username,password){
         sessionStorage.setItem('authenticatedUser',username)
         console.log('registered successful login');
     }

     logout(){
        sessionStorage.removeItem('authenticatedUser');
     }
}

export default new AuthenticationService();