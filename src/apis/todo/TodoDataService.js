import axios from 'axios';
class TodoDataService {
    retrieveAllTodos(name){
        return axios.get(`http://localhost:8081/users/${name}/todos`);
    }
}

export default new TodoDataService