import React ,{Component} from 'react'
import {BrowserRouter as Router,Route,Link,hr,Switch} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.jsx';


class HeaderComponent extends Component{    
    render(){

        const isUserLoggedIn=AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return(          
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.javatpoint.com/spring-boot-tutorial" className="navbar-brand">React-SpringBoot</a></div>
                    <ul className="navbar-nav">
                         { isUserLoggedIn  &&  <li ><Link className="nav-link" to="/welcome">Home</Link></li>  }
                         {isUserLoggedIn  && <li ><Link className="nav-link" to="/todos">Todos</Link></li>  }
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        { !isUserLoggedIn && <li ><Link className="nav-link" to="/login">Login</Link></li> }
                        { isUserLoggedIn &&  <li ><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li> }
                    </ul>
                </nav>
            </header>
            
        )
    }
}


export default HeaderComponent