import React from "react";
import "./App.css";
import {FoodApp, FoodHeader} from './components/styles/AppStyles'

import Welcome from './components/welcome/WelcomePage';
import SignIn from './components/signIn/SignInPage';
import CreateAccount from './components/createAccount/CreateAccountPage';
import CreateWithFacebook from './components/createAccount/FacebookPage';



function App() {
  return (
    <FoodApp>
      <FoodHeader></FoodHeader>
      <CreateWithFacebook />
    </FoodApp>
  );
}

export default App;
