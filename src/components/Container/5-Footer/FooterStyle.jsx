import styled from "styled-components";

//bgc img
import rasm from "../5-Footer/Phone/1.png"

import Link from '@material-ui/core/Link';

//Icons mui
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Checkbox from '@mui/material/Checkbox';

import EmailIcon from '@mui/icons-material/Email';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto !important;
  background-image: url(${rasm})  !important;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  /* linear-gradient(rgba(0, 0, 0, 0.7)), */
`
export const Foot = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
margin-top: 30px;

@media screen  and (max-width:1100px) {
    align-items: center;
    justify-content: center;
    flex-direction: column !important;
    margin-top: 2rem;
   }

`
export const Footleft = styled.div`

img{
  width: 100%;
  transition: all 3s;

  :hover{
  transform: rotateX(360deg);
  cursor: pointer;
  color: aquamarine;
  transition: all 2s;
  }
}

`
export const Icon = styled.div`
 margin-top: 20px;

`
export const Footcenter = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;

button{
  margin-top: 15px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 168%;
  letter-spacing: 0.14em;
  color: white !important;
  background-color: #131313 !important;
  border: none;
  cursor: pointer;

  :hover {
    display: block;
    content: "";
    border-bottom: solid 2px;
    border-image: linear-gradient(
        to right,
        rgba(173, 0, 255, 1),
        rgba(0, 224, 255, 1)
      )
      1;
    }
}
`
export const Link22 = styled(Link)`
  margin-top: 15px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 168%;
  letter-spacing: 0.14em;
  color: white !important;
  background-color: #131313 !important;
  border: none;
  cursor: pointer;

  `
export const Footright = styled.div`


  @media screen  and (max-width:1200px) {
    align-items: center;
    justify-content: center;
    flex-direction: column !important;
    margin-top: 2rem;
   }

  h3{
    margin-top: 15px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 168%;
    letter-spacing: 0.14em;
    color: #FFFFFF;


    @media screen  and (max-width:1200px) {
    text-align: center;
   }

    :hover {
    display: block;
    content: "";
    border-bottom: solid 2px;
    border-image: linear-gradient(
        to right,
        rgba(173, 0, 255, 1),
        rgba(0, 224, 255, 1)
      )
      1;
    }
  }
`

export const FacebookOutlinedIcon1 = styled(FacebookIcon)`
    width: 40px !important;
    height: 40px !important;
    color: white;
    margin: 0 10px;
    transition: all 2s;

  :hover{
    transform: scale(1.3) !important;
     color: #00b7ff !important;
    cursor: pointer;
    transition: all 2s;
    }
`
export const TelegramIcon2 = styled(TelegramIcon)`
  width: 40px !important;
  height: 40px !important;
  color: white;
  margin: 0 10px;
  transition: all 1s;

   :hover{
    transform: scale(1.3) !important;
    color: #00b7ff !important;
    cursor: pointer;
    transition: all 2s;
    }

`
export const InstagramIcon3 = styled(InstagramIcon)`
  width: 40px !important;
  height: 40px !important;
  color: white;
  margin: 0 10px;
  transition: all 0.5s;

  :hover{
  transform: scale(1.3) !important;
  color: #e95950 !important;
  cursor: pointer;
  color: aquamarine;
  transition: all 1s;
  }
`
export const YouTubeIcon4 = styled(YouTubeIcon)`
    width: 40px !important;
    height: 40px !important;
    color: white;
    margin: 0 10px;
    transition: all 2s;

  :hover{
  color: red !important;
  cursor: pointer;
  transition: all 2s;
  transform: scale(1.3) !important;
  }
`

export const Foot1 = styled.div`
  display: flex;
`
export const Footright1 = styled.div`

  @media screen  and (max-width:550px) {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    text-align: center !important;
    flex-direction: column;
  }

   h1{
    margin-top: 15px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 168%;
    letter-spacing: 0.14em;
    color: #FFFFFF;

    @media screen  and (max-width:1200px) {
      text-align: center;
   }

   }

   p{
    margin-top: 15px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 168%;
    letter-spacing: 0.14em;
    color: #a8a4a4;
    @media screen  and (max-width:1200px) {
    text-align: center;
   }

   }
`
export const Inpbutton = styled.div`
display: flex;
width: 70% !important;
height: 50px;
position: relative;


@media screen  and (max-width:1200px) {
    justify-content: center !important;
    align-items: center !important;
    width: 70% !important;
    position:sticky;
    margin-left: 5rem !important;
   }

@media screen  and (max-width:550px) {
  margin-left: 0rem !important;
}

input{
  width: 100% !important;
  height: 32px !important;
  padding:0 20px !important;
  transform: skew(-30deg);
  margin-top: 20px;
  border: 1px solid white !important;
  outline: none;
  color: white;
  background-color: transparent !important;

  ::placeholder{
    padding-left: 20px;
    transform: skew(30deg) !important;

    @media screen  and (max-width:550px) {
    padding-left: 0rem !important;
    }
  }


  button{
    position: relative;
    width: 50px !important;
    height: 30px !important;
    /* right: 0rem !important; */
    transform: skew(-30deg) !important;
    background-color: #1462D8!important;
    border: none;
    cursor: pointer;
  }
}
`
export const EmailDiv = styled.div`
  display: flex;
  justify-content: center ;
  align-items: center ;
  margin-top: 20px;
  width: 40px;
  height: 30px;
  transform: skew(-30deg);
  position: absolute;
  right: 0;
  background-color: blue !important;
`

export const EmailIc = styled(EmailIcon)`
color: white;
width: 30px !important;
height: 30px !important;

`

export const End = styled.div`
 display: flex !important;
 align-items: center;
 margin-top:10px;
 background-color:#131313 !important;
 border: none;

 @media screen  and (max-width:1200px) {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
   }

   h3{
    margin-top: 0px;
    font-family: 'Montserrat';
    font-size: 14px;
    line-height: 168%;
    color: #888585;
   }
`

export const Checkbox1 = styled(Checkbox)`
  color: white !important;

`
export const Select1 = styled.div`
  color: white !important;
  width: 500px !important;

`
export const Text = styled.div`
  text-align: center;
  color: gray !important;
  font-size: 10px !important;
  margin-top:20px;
  margin-bottom: 20px;
`
export const Typography2 = styled.h2`
  text-align: center;
  color: white !important;
  font-size: 14px !important;
  margin-top:20px;
`
