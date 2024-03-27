import React from "react";

export default class TimerOne extends React.Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
   
  static getDerivedStateFromProps(props, state) {
    console.log("Timer getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Timer ComponentDidMount");
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("Timer getSnapshotBeforeUpdate");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Timer shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Timer componentDidUpdate");
  }

handleIncrease = () =>{
this.setState((prevState) =>{
    return {
        count: prevState.count+1
    }
})
}
render(){
    return(
        <>
    
         <h2>{this.state.count}</h2>   
       <button onClick={this.handleIncrease}>Increase</button>

         
        </>
       
    )
}
}
