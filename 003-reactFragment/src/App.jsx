import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";

function App(){
  let fragment_properties = [
    'Grouping Elements',
    'Syntax',
    'No Extra DOM Nodes',
    'Keyed Fragments',
    'Supports Strings',
  ];


  return (
    <React.Fragment>
      <h1>Fragment in React</h1>
      <FoodItems fragment_properties={fragment_properties}></FoodItems>
    </React.Fragment>
  );
}

export default App;