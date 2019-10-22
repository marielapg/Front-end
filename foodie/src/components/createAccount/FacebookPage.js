import React from "react";
import { ProfileIcon, Bg, BtnStyle } from "../vectors/Vectors";
import { SignInBtn } from "../styles/Buttons";
import { BtnDiv } from "../styles/Divs";
import { Inputs } from "../styles/Forms";
import { SignInH1 } from "../styles/AppStyles";

const CreateWithFacebook = props => {
  return (
    <div>
      <SignInH1>Found Facebook</SignInH1>
      <div>
        <div style={Bg}>
          <p>
            <ProfileIcon />
          </p>{" "}
          <div style={BtnStyle}>Your Profile</div>
        </div>
      </div>
      <form>
        <BtnDiv>
          <Inputs type="password" name="Password" placeholder="Password" />

          <SignInBtn>Create</SignInBtn>
        </BtnDiv>
      </form>
      <p>  Never mind</p>
    </div>
  );
};

export default CreateWithFacebook;
