import React from "react";
//import styled from "styled-components";
import { SignInBtn, CreatAccBtn } from "../styles/Buttons";
import { FoodApp, FoodHeader, FoodTag, FoodH1 } from "../styles/AppStyles";
import { BtnDiv } from "../styles/Divs";

const Welcome = props => {
  return (
    <>
      <FoodHeader>
        <FoodH1>FoodieFun</FoodH1>
        <FoodTag>
          <p>
            A place for foodies to share and rate their favorite spots, dishes,
            and overall dining experience
          </p>
        </FoodTag>
      </FoodHeader>
      <BtnDiv>
        <SignInBtn>Sign In</SignInBtn>
        <CreatAccBtn> Create Account</CreatAccBtn>
        <p>Just Browsing -></p>
      </BtnDiv>
    </>
  );
};

// const BtnDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   color: white;
// `;

// const SignIn = styled.button`
//   background: #ffdd67;
//   border-radius: 4px;

//   font-size: 1.6rem;
//   width: 20rem;
//   margin-top: 5rem;
// `;

// const CreatAcc = styled.button`
//   background: #313036;
//   border: 1.5px solid #ffdd67;
//   box-sizing: border-box;
//   border-radius: 4px;
//   margin-top: 2rem;
//   font-size: 1.6rem;
//   width: 20rem;
//   color: white;
// `;
export default Welcome;