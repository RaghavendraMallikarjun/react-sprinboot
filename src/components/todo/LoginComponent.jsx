import React ,{Component} from 'react'
import AuthenticationService from './AuthenticationService.jsx'


class LoginComponent extends Component{

    constructor(props){
        super(props);

        this.state={
            username:'raghavendra',
            password:'12345',
            hasLoginFailed:false,
            showLoginSuccessful:false
        }
        this.loginClicked=this.loginClicked.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    loginClicked(){
        if(this.state.username==='raghavendra' && this.state.password==='12345'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
            console.log('login successful')
            this.setState({showLoginSuccessful:true});
        }    
        else{
        console.log('login falied');
            this.setState({showLoginSuccessful:false});
            this.setState({hasLoginFailed:true});
        }
    }

    render(){
        return(
            <>
            <h1>Login</h1>
            <div className="container">
            {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
            {/* <ShowValidCredentials showLoginSuccessful={this.state.showLoginSuccessful}/> */}
            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid credentials</div>}
            {this.state.showLoginSuccessful && <div>Login successful</div>}
            
                <div> 
                    <input type="text" name="username"  value={this.state.username} onChange={this.handleChange}></input>          
                </div>
                <div>
                   <input type="password" name="password"  value={this.state.password} onChange={this.handleChange} ></input>          
                </div>     
               <button className="btn btn-success"  onClick={this.loginClicked}>Login</button>         
           
           </div>
           </>
        )
    }
} 

export default LoginComponent