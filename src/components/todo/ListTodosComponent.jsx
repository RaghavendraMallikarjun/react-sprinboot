import React ,{Component} from 'react'
import AuthenticationService from './AuthenticationService.jsx'
import TodoDataService from '../../apis/todo/TodoDataService.js'

class ListTodosComponent extends Component{
    
    constructor(props){
        super(props);

        this.state={
            todos:[
                // {id:1,description:'Learn React',done:false,targetDate:new Date()},
                // {id:2,description:'Learn Springboot',done:false,targetDate:new Date()},
                // {id:3,description:'Learn AWS',done:false,targetDate:new Date()}
            ]
        }
    }

    componentDidMount() {
        let username=AuthenticationService.getLoggedInUsername();
        TodoDataService.retrieveAllTodos(username)
        .then(
           response => {
               this.setState({
                   todos:response.data
               })
           }

        )
    }

    render(){
        return (

        <div>
         <h1>List Tods</h1>
         <div className="container">
         <table class="table">
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
        </div> 

        );
    }
}

export default ListTodosComponent