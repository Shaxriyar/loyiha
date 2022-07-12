import { Button } from "@mui/material";
import styled from "styled-components";

//bgc img
import rasm from "../3-Qoshish/Phone/2.png"


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  /* height: 380px; */
  background-image: url(${rasm});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
/* linear-gradient(rgba(0, 0, 0, 0.7)), */
`
export const Center = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 50px 15%;
  width: 100%;

  @media screen and (max-width:1000px) {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
    }

  h1{
    font-family: 'Russo One';
    font-style: normal;
    width: 65%;
    color: #ffff;

    @media screen and (max-width:1000px) {
        width: 100%;
    }
    @media screen and (max-width:420px) {
      font-size: 24px;
    }
  }
    @media screen and (max-width:310px) {
      text-align: center;
      font-size: 20px;
    }

`
export const Buttonclick = styled(Button)`
  width: 180px;
  height: 50px;
  margin-top: 50px !important;
  border-radius: 4px;
  background-color: #000000;
  color: white !important;
  cursor: pointer;
  border-image: linear-gradient(90deg, rgba(2,255,222,1) 41%, rgba(218,0,255,0.9668242296918768) 70%) !important;
  border-image-slice: 1 !important;

`
