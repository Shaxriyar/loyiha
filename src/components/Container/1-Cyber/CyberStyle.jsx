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
  height: 20% !important;
  margin-top: 0px;
  position: fixed;
  z-index: 111;
  backdrop-filter: blur(10px);
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
 margin: 0 50px;

  button{
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    border: none;
    margin-right: 0px;
    background-color: transparent !important;
    color: #ffff;
    width: 100px;
    height: 40px;
    transition: all 0.5s;
    transform: scale(1.1);

    &:hover{
    transform: scale(1.1);
    color: red!important;
    transition: all 2s;
    }

      @media screen  and (max-width:1000px) {
        display: none !important;
      }

      :hover{
        background: linear-gradient(90deg, #3ee6cf 41%, #c96edaf6 ) !important;
        color: black;
        border-radius: 5px;
        cursor: pointer;
        transform: scale(1.1);
        color: gray;
        transition: all 2s;
   }

  }
`
 export const MuiButton = styled(Button)`

  &:hover{
    transform: rotateX(360deg) !important;
    cursor: pointer !important;
    color: aquamarine !important;
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
  line-height: 101px;
  text-align: center;
  color: #FFFFFF;

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
  }

`

export const MenuBtn = styled(IconButton)`

`
export const ScrollToTop1 = styled(ScrollToTop)`
  background-color: blue !important;
  color: white !important;
  border-radius: 50px !important;
`
