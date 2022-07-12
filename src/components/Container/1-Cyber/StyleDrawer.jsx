import styled from "styled-components";

//Icons mui
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const  Photo = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 20px;

 div{
  width: 100%;
  border-top: 2px solid grey;
  display: flex;
  margin-top: 50px;
  position: absolute;
  left: 0;
  justify-content: center;
  align-items: center;
 }

`

export const Photoimg  = styled.img`

`
export const Localniset  = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 2px;


`
export const IconDiv = styled.div`
  div{
    width: 100%;
    border-top: 2px solid grey;
    display: flex;
    padding-top: 7px;
    justify-content: center;
    align-items: center;
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