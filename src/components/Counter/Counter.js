import React, {Component} from 'react';
import './Counter.css';


class Counter extends Component{

  constructor(){
    super(); //we cannot use this without super
    this.state={
        counter:0
    }

    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
    this.reset=this.reset.bind(this);
   //binding doesnt not require when we use arrow functions..
  }


  render() {
    return (
      <div className="counter">
      <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <CounterButton by ={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <CounterButton by ={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <span className="count" style={{fontSize:"50px"}}>{this.state.counter}</span>
      <div><button className="reset" onClick={this.reset}>Reset</button></div>
      </div>
    );
  }

  reset(){
    this.setState( (prevState) =>{
      return {counter:0}
     }
     );
  }

  increment (by){
    
    //we cannot update the state directly
    //we can only update the state using setState property.
     this.setState( (prevState) =>{
      return {counter:prevState.counter +by}
     }
     );       
   }
   decrement (by){
    
    //we cannot update the state directly
    //we can only update the state using setState property.
     this.setState( (prevState) =>{
      return {counter:prevState.counter -by}
     }
     );       
   }
}


 class CounterButton extends Component {

   constructor(){
       super(); //we cannot use this without super
       this.state={
           counter:0
       }

       this.increment=this.increment.bind(this);
       this.decrement=this.decrement.bind(this);
      //binding doesnt not require when we use arrow functions..
   }

     render () {    
      return (
        <div className="Counter">
         <button onClick={this.increment}>+{this.props.by}</button>
         <button onClick={this.decrement}>-{this.props.by}</button>
         {/* <span className="count" style={{fontSize:"50px"}}>{this.state.counter}</span> */}
        </div>
      )
     }
     increment (){
         //we cannot update the state directly
         //we can only update the state using setState property.
         this.setState(
         {
          counter:this.state.counter +this.props.by
         }
         );
         
         this.props.incrementMethod(this.props.by);
    }
    decrement (){
      //we cannot update the state directly
      //we can only update the state using setState property.
      this.setState(
      {
       counter:this.state.counter -this.props.by
      }
      );
      
      this.props.decrementMethod(this.props.by);
 }
  }

  
  
export default Counter;