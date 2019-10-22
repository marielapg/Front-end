import React from "react";
import "./App.css";
import {FoodApp, FoodHeader} from './components/styles/AppStyles'
import {Route} from 'react-router-dom';

import Welcome from './components/welcome/WelcomePage';
import SignIn from './components/signIn/SignInPage';
import CreateAccount from './components/createAccount/CreateAccountPage';
import CreateWithFacebook from './components/createAccount/FacebookPage';
import CreateWithGoogle from './components/createAccount/FacebookPage';
import PremiumNav from './components/premiumNav/PremiumNavPage';



function App() {
  return (
    <FoodApp>
      <FoodHeader></FoodHeader>
      <Route exact path="/" render = {props => <Welcome {...props} />} />
      <Route path="/signin" render = {props => <SignIn {...props} />}/>
      <Route path="/createAccount" render = {props => <CreateAccount {...props} />}/>
      <Route path="/createWithFb" render = {props => <CreateWithFacebook {...props} />}/>
      <Route path="/createWithGoogle" render = {props => <CreateWithGoogle {...props} />}/>
      <Route path="/nav" render = {props => <PremiumNav {...props} />}/>
    </FoodApp>
  );
}

export default App;
