import React from "react";
import ComponentA from "./ComponentA"; // ComponentA should start with a capital letter
import TimerOne from "./Timer/TimerOne";

class App extends React.Component {
  render() {

    return(
<ComponentA />,// ComponentA should start with a capital letter
 <TimerOne /> 
    ) 

  }
}

export default App;
