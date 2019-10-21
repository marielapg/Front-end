import React from "react";
//import styled from "styled-components";
import "./App.css";
import {FoodApp,FoodHeader, FoodTag, FoodH1} from './components/styles/AppStyles'

import Welcome from './components/welcome/WelcomePage';
import SignIn from './components/signIn/SignInPage';



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
      <SignIn />
    </FoodApp>
  );
}

export default App;
