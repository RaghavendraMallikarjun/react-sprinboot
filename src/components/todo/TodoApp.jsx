import React ,{Component} from 'react'
import {BrowserRouter as Router,Route,Link,hr} from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom';

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
               <Router>
                   <>
                   <HeaderComponent/>
                   <Switch>
                   <Route path="/login" exact component={LoginComponent}/>
                   <Route path="/welcome" exact component={WelcomeComponent}/>
                   <Route path="/todos" exact component={ListTodosComponent}/>
                   <Route component={ErrorComponent}/>
                   </Switch>
                   <FooterComponent/>
                   </>
               </Router>
            </div>
        );
    }
}

class HeaderComponent extends Component{
    render(){
        return(          
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.javatpoint.com/spring-boot-tutorial" className="navbar-brand">React-springboot</a></div>
                    <ul className="navbar-nav">
                         <li ><Link className="nav-link" to="/welcome">Home</Link></li> 
                         <li ><Link className="nav-link" to="/todos">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                         <li ><Link className="nav-link" to="/login">Login</Link></li>
                         <li ><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
            
        )
    }
}

class FooterComponent extends Component{
    render(){
        return(
            <>
           <hr/> Footer
            </>  
        )
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
        return (
        <div>
        Welcome {this.props.match.params.name}.you can manage your tasks <Link to="/todos">here</Link>
        </div>
       ) 
    }
}
class ListTodosComponent extends Component{
    
    constructor(props){
        super(props);

        this.state={
            todos:[
                {id:1,description:'Learn React',done:false,targetDate:new Date()},
                {id:2,description:'Learn Springboot',done:false,targetDate:new Date()},
                {id:3,description:'Learn AWS',done:false,targetDate:new Date()}
            ]
        }
    }

    render(){
        return (

        <div>
         <h1>List Tods</h1>
         <table>
             <thead>
                 <tr>
                  <th>id</th>
                  <th>description</th>
                  <th>Target Date</th>
                  <th>Is Completed?</th>
                 </tr>
            </thead>  

            <tbody>{

                this.state.todos.map(
                   todo =>

                <tr>
                     <td>{todo.id}</td>
                     <td>{todo.description}</td>
                     <td>{todo.targetDate.toString()}</td>
                     <td>{todo.done.toString()}</td>
                </tr>
                )
                  }
                
            </tbody>

             
         </table>
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

function ErrorComponent(){
    return <div>An error Occured,Please contact administrator</div>
}

export default TodoApp;