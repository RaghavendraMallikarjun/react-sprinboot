import React, { Component } from 'react';
// import logo from './logo.svg';
import './components/learning-examples/SecondComponent'
import './App.css';
import './components/todo/TodoApp'
// import SecondComponent from './components/learning-examples/SecondComponent';
import CounterButton from './components/Counter/Counter';
import Counter from './components/Counter/Counter';
import TodoApp from './components/todo/TodoApp';
 
class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Counter/> */}
      <TodoApp/>
      </div>
    );
  }
}
// class FirstComponent extends Component {
//   render() {
//     return (
//       <div className="FirstComponent">
//        My first Component
//       </div>
//     );
//   }
// }

// function ThirdComponent(){
//   return (
//     <div className="ThirdComponent">
//      My third Component
//     </div>
//   );
// }
// class LearningComponent extends Component {
//   render() {
//     return (
//       <div className="LearningComponent">
//       <FirstComponent/>
//       <FirstComponent/>
//       <ThirdComponent/>
//       <SecondComponent/>
//        LearningComponent
//       </div>
//     );
//   }
// }



export default App;