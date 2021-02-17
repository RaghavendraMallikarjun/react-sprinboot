import React ,{Component} from 'react'

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
               <LoginComponent/>
               <WelcomeComponent/>
            </div>
        );
    }
}

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
            <div className="abc">
            <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
            <ShowValidCredentials showLoginSuccessful={this.state.showLoginSuccessful}/>
            <div>Login/Register</div>
           <div><input type="text" name="username"  value={this.state.username} onChange={this.handleChange}></input></div>
           <div><input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input></div>
           <div><button onClick={this.loginClicked}>Login</button></div>
           </div>
        )
    }
} 

class WelcomeComponent extends Component{
    render(){
        return <div>Welcome Component</div>
    }
}

function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return <div>Invalid credentials</div>
    }
    else {
        return null
    }
}

function ShowValidCredentials(props){
    if(props.showLoginSuccessful){
        return <div>Valid credentials</div>
    }
    else {
        return null
    }
}


export default TodoApp;