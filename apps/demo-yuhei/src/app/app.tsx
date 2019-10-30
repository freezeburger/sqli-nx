import React from "react";

import "./app.css";
import Home from "./container/home";
import * as Store from "./services/facade";

/**
 * Composant sous forme de classe
 */
export class App extends React.Component{
  constructor(props){
    super(props);
    console.warn(1, 'App');
  }

  componentDidMount(){
    console.warn(2, 'App');
  }

  componentDidUpdate(){
    console.warn(3, 'App');
  }

  componentWillUnmount(){
    console.warn(4, 'App');
  }



  render(){
    return (
      <div className="app">
        <Home store={Store} />
      </div>
    );
  }
}

export default App;
