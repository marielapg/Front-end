import React from "react";
import {ImgDiv, NavDiv, LeftDiv} from '../styles/Divs';

const PremiumNav = (props) =>{
    return(
        <NavDiv>
        <LeftDiv>
            <p>Place holder</p>
        </LeftDiv>
        <ImgDiv><img src={require('../img/food.png')}/></ImgDiv>

        </NavDiv>
    );
};
export default PremiumNav;