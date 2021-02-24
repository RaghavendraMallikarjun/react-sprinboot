import React ,{Component} from 'react'
import  {useParams} from "react-router-dom";
import {BrowserRouter as Router,Route,Link,hr} from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import AuthenticationService from './AuthenticationService.jsx';
import HelloWorldService from '../../apis/todo/HelloWorldService';
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent'
class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
               <Router>
                   <>
                   <HeaderComponent/>
                   <Switch>
                   <Route path="/login" exact component={LoginComponent}/>
                   <Route exact path="/welcome/:name" component={WelcomeComponent}/>
                   <Route exact path="/welcome" component={WelcomeComponent}/>
                   <Route path="/todos" exact component={ListTodosComponent}/>
                   <Route path="/logout" exact component={LogoutComponent}/>                   
                   <Route component={ErrorComponent}/>
                   </Switch>
                   <FooterComponent/>
                   </>
               </Router>
            </div>
        );
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