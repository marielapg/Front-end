import React from "react";
import { FbIcon, GoogleIcon, vectorStyle } from "../vectors/Vectors";
import { SignInBtn } from "../styles/Buttons";
import { BtnDiv } from "../styles/Divs";
import { Inputs } from "../styles/Forms";
import { SignInH1 } from "../styles/AppStyles";

const CreateAccount = (props) => {
  return (
    <div>
      <SignInH1>Create Account</SignInH1>
      <div style={vectorStyle}>
        <FbIcon />
        <GoogleIcon />
      </div>
      <form>
        <BtnDiv>
          <Inputs type="text" name='User' placeholder="User Name" />
          <Inputs type="email" name="Email" placeholder="Email" />
          <Inputs type="password" name="Password" placeholder="Password" />
          <Inputs type="password" name="Password2" placeholder="Verify Password" />

          <SignInBtn>Create</SignInBtn>
        </BtnDiv>
      </form>
    </div>
  );
};

export default CreateAccount;
