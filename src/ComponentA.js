import React from "react";

class ComponentA extends React.Component { // ComponentA should start with a capital letter
  constructor() {
    super();
    this.state = {
      name: "ComponentA" // ComponentA should start with a capital letter
    };
    console.log("ComponentA constructor");
  }
static getDerivedStateFromProps(){
    console.log("componentA getDriverdstste from props");
    return null;

}
componentDidMount (){
   console.log("componentdidmount")

}
  render() {
    console.log("ComponentA render");
    return <h1>{this.state.name}</h1>;
  }
}

export default ComponentA; // ComponentA should start with a capital letter
