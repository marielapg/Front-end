import React from "react";
import styled from "styled-components";

const Welcome = props => {
  return (
    <BtnDiv>
      <SignIn>Sign In</SignIn>
      <CreatAcc> Create Account</CreatAcc>
      <p>Just Browsing -></p>
    </BtnDiv>
  );
};

const BtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const SignIn = styled.button`
  background: #ffdd67;
  border-radius: 4px;

  font-size: 1.6rem;
  width: 20rem;
  margin-top: 5rem;
`;

const CreatAcc = styled.span`
  background: #313036;
  border: 1.5px solid #ffdd67;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 2rem;
  padding: 0.5rem;
  width: 20rem;
  color: white;
`;
export default Welcome;
