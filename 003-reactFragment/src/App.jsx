import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App(){

  let textState = useState("Initial Value...");
  let textValue = textState[0];
  let setTextValue = textState[1];

  let [fragment_properties, set_fragment_properties] = useState([
    'Grouping Elements',
    'Syntax',
    'No Extra DOM Nodes',
    'Keyed Fragments',
    'Supports Strings',
    ])


  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      setTextValue(event.target.value);
      let newArray = fragment_properties;
      newArray.push(event.target.value);
      set_fragment_properties(newArray);
      event.target.value = '';
    }
  };


  return (
    <>
    <Container>
      <h1 className="heading">Fragment in React</h1>
      <FoodInput handleKeyDown={handleKeyDown} textValue={textValue}></FoodInput>
      <FoodItems fragment_properties={fragment_properties}></FoodItems>
    </Container>
    <Container>
      <h1 className="heading">In this series React Fragment is discussed in detailed.</h1>
    </Container>
    </>
  );
}

export default App;