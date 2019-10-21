import React from "react";

import { SignInBtn } from "../styles/Buttons";
import { BtnDiv } from "../styles/Divs";
import { Inputs} from "../styles/Forms";
import { FbIcon, GoogleIcon, vectorStyle } from "../vectors/Vectors";
import { SignInH1 } from "../styles/AppStyles";

const SignIn = () => {
  return (
    <div>
      <SignInH1>Sign In</SignInH1>
      <div style={vectorStyle}>
        <FbIcon />
        <GoogleIcon />
      </div>

      <form>
        <BtnDiv>
          
          <Inputs type="email" name='Email' placeholder="Email" />
          <Inputs type="password" name='Password' placeholder="Password" />

          <SignInBtn>Sign In</SignInBtn>
          <br></br>
          <p>Forgot Password?</p>
        </BtnDiv>
      </form>
    </div>
  );
};

export default SignIn;
