import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";

function App(){
  let fragment_properties = [
    'Grouping Elements',
    'Syntax',
    'No Extra DOM Nodes',
    'Keyed Fragments',
    'Supports Strings',
  ];


  return (
    <>
    <Container>
      <h1 className="heading">Fragment in React</h1>
      <FoodItems fragment_properties={fragment_properties}></FoodItems>
    </Container>
    <Container>
      <h1 className="heading">In this series React Fragment is discussed in detailed.</h1>
    </Container>
    </>
  );
}

export default App;