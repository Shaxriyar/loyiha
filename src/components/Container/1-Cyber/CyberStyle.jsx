//mui-icons import qilindi
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

import styled from "styled-components";

//bgc img
import rasm from "../1-Cyber/Phone/photo_.jpg"


  //  START  SCROLL TO TOP
  import ScrollToTop from "react-scroll-to-top";
  //  END  SCROLL TO TOP

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url(${rasm});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  /* linear-gradient(rgba(0, 0, 0, 0.7)), */
`

export const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 12% !important;
  margin-top: 0px;
  position: fixed;
  z-index: 111;
  /* backdrop-filter: blur(10px); */

  @media screen  and (max-width:1000px) {
    justify-content: space-between;
  }
`

export const Navbarright = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  width: 20%;

  img{
    transition: all 3s;
   :hover{
    transform: rotateX(660deg);
    cursor: pointer;
    color: aquamarine;
    transition: all 3s;
    }

    @media screen  and (max-width:1000px) {
      margin-left: 2rem;
     }
    @media screen  and (max-width:500px) {
      width: 120px;
     }
  }

`

export const Navbarleft = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-family: "Montserrat";
 cursor: pointer;
`
export const Div = styled.div`
 display: flex;
 /* justify-content: space-between; */
 align-items: center;
 margin: 0px;


 .libottom {
    display: inline-block !important;
    align-items: center;
    margin: 0px!important;
    text-transform: uppercase !important;
    width: auto;
  }
  .libottom:after {
    display: block !important;
    content: "" !important;
    border-bottom: solid 2px !important;
    border-image: linear-gradient(
        to right,
        rgba(173, 0, 255, 1),
        rgba(0, 224, 255, 1)
      )
      1 !important;
    transform: scaleX(0) !important;
    transition: transform 250ms ease-in-out !important;
  }
  .libottom:hover:after {
    transform: scaleX(1) !important;
  }
  .libottom:after {
    transform-origin: 0% 50% !important;
  }

  @media screen  and (max-width:1000px) {
      display: none !important;
    }
`

export const Buttondiv = styled.button`
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  border: none;
  margin-right: 0px;
  background-color: transparent !important;
  color: #ffff;
  width: 110px;
  height: 40px;
  transition: all 0.5s;
  transform: scale(1.1);

  :nth-child(1){
    margin-top: 8px !important;
    margin-right: 30px !important;
  }
  :nth-child(2){
    margin-top: 8px !important;
    margin-right: 30px !important;
  }
  :nth-child(3){
    margin-top: 8px !important;
    margin-right: 30px !important;
  }
  :nth-child(4){
    margin-top: 8px !important;
    margin-right: 30px !important;
  }
`

 export const MuiButton = styled(Button)`
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-block;
    position: relative;
    outline: none;
    color: #fff;
    width: 171px;
    height: 45px;
    font-size: 17px;
    line-height: 42px;
    padding: 0;
    border: none;
    background-color: #8F00FF !important;

    &:hover{
        background-color: transparent  !important;
        box-shadow:none !important;
    }

    &::before,::after{
        content:'';
        position:absolute;
        top:0;
        right:0;
        height:2px;
        width:0;
        background: linear-gradient(92.49deg, #AD00FF 14.3%, #00E0FF 100%);
        transition:400ms ease all;
    }

    &::after{
        right:inherit;
        top:inherit;
        left:0;
        bottom:0;
    }

    &:hover::before,:hover::after{
        width:100%;
        transition:800ms ease all;
    }

  @media screen  and (max-width:1000px) {
      display: none !important;
   }
`
 export const Link = styled(NavLink)`
  font-size: 16px;
  color: #FFFFFF;
  color: white;
  text-decoration: none;
  margin: 0 20px;
  color: white;
  transition: all;

  &:hover{
    transform: scale(1.1);
     color: #fad501df;
    transition: all 0.5s;
    }

    @media screen  and (max-width:1000px) {
      display: none;
   }

`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;

  @media screen  and (max-width:955px) {
       margin-top: 5rem !important ;
   }

  h1{
  font-family: 'Russo One';
  font-style: normal;
  font-size: 60px;
  line-height: 80px;
  text-align: center;
  color: #FFFFFF;
  letter-spacing: 5px;

  @media screen  and (max-width:1050px) {
    margin-top: 50px;
    line-height: 80px;
    width: 80%;
   }
  @media screen  and (max-width:1000px) {
     font-size: 50px;
     width: 75%;
     margin-top: 0px;
   }
  @media screen  and (max-width:900px) {
     font-size: 50px;
     width: 65%;
     line-height: 70px;
     margin-top: 0px;
   }
  @media screen  and (max-width:850px) {
     font-size: 45px;
     width: 75%;
     line-height: 70px;
   }
  @media screen  and (max-width:660px) {
     font-size: 40px;
     width: 80%;
     line-height: 60px;
   }
  @media screen  and (max-width:550px) {
     font-size: 35px;
     width: 85%;
     line-height: 50px;
   }
  @media screen  and (max-width:450px) {
     font-size: 30px;
     width: 80%;
     line-height: 50px;
   }
  @media screen  and (max-width:400px) {
     font-size: 30px;
     width: 100%;
     line-height: 50px;
   }
  @media screen  and (max-width:340px) {
     font-size: 25px;
     line-height: 40px;
   }

  }

  span{
    color: #8F00FF;
  }
`

export const BtnWrap = styled.div`
  display: none;

    @media screen  and (max-width:1000px) {
     display: block !important;
     margin-right: 2rem;
  }

`

export const MenuBtn = styled(IconButton)`

`
export const ScrollToTop1 = styled(ScrollToTop)`
  background-color: blue !important;
  color: white !important;
  border-radius: 50px !important;
`
