import React from "react";
import styled from "styled-components";
import "./App.css";

import Welcome from './components/welcome/WelcomePage';



function App() {
  return (
    <FoodApp>
      <FoodHeader>
        <FoodH1>FoodieFun</FoodH1>
        <FoodTag>
          <p>
            A place for foodies to share and rate their favorite spots, dishes,
            and overall dining experience
          </p>
        </FoodTag>
      </FoodHeader>
      <Welcome />
    </FoodApp>
  );
}
const FoodH1 = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");
  font-family: "Josefin Sans", sans-serif;
  color: #ffdd67;
  font-weight: bold;
  font-size: 7.2rem;
`;

const FoodTag = styled.div`
  width: 50%;
  font-size: 1.6rem;
`;

const FoodHeader = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2.1rem;
  color: white;
`;

const FoodApp = styled.div`
  background-color: #282c34;
  text-align: center;
  min-height: 100vh;
`;

export default App;
