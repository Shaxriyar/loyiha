import styled from "styled-components";

//mui-button import qilindi
import { Button } from "@mui/material";

import Select from 'react-select'

import TextField from '@mui/material/TextField';

//bgc img
import rasm from "../4-Turnir/Phone/1.png"



export const Container2 = styled.div`
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
export const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding-top: 80px;

  @media screen  and (max-width:1000px) {
      display: flex !important;
      padding-top: 0px !important;
    }

    @media screen  and (max-width:1000px) {
    flex-direction: column;
    padding-top: 40px !important;
   }

`

 export const Left = styled.div`

  @media screen  and (max-width:1000px) {
        display: flex !important;
        margin-top: 0px !important;
    }

    h1{
    font-family: 'Russo One';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    color: #FFFFFF;
    transition: all 4s;

   :hover{
    transform: rotateY(660deg);
    cursor: pointer;
    color: aquamarine;
    transition: all 4s;
    }

    @media screen  and (max-width:1000px) {
      display: flex !important;
      margin-bottom: 0rem !important;
    }
    @media screen  and (max-width:350px) {
        text-align: center;
        font-size: 24px !important;
    }
  }
  `
  export const Right = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 550px;

  @media (max-width:1000px) {
      display: ${p=>p.bolen ? 'none' : 'flex'};
      width: 80%;
      flex-direction: column;
      align-items: center;
      margin-right: 0;
    }

  li{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #FFFFFF !important;
    transition: all 4s;

  @media screen  and (max-width:1000px) {
     font-size: 20px;
    }
    @media screen  and (max-width:1000px) {
      text-align: center;

      padding-top: 10px;
      margin-top: 10px !important;
      width: 300px;
      height: 50px;
      font-weight: 800;
      border-radius: 10px;
      background-color: white;
      color: red !important;
      cursor: pointer;
      border-image: linear-gradient(90deg, rgba(2,255,222,1) 41%, rgba(218,0,255,0.9668242296918768) 70%) !important;
      border-image-slice: 1 !important;
    }

    @media screen  and (max-width:350px) {
        width: 250px;
    }
  }

    select{
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    font-weight: 600;
    font-size: 20px !important;
    color: #e0d7d7 !important;
    margin: 0;
    text-transform: uppercase;

  .eng {
    background: #30c702;
  }

  }

  .libottom {
    color: #666;
    display: inline-block;
    margin: 0;
    text-transform: uppercase;

    @media screen  and (max-width:1000px) {
      text-align: center;
      padding-top: 10px;
      margin-top: 10px !important;
    }
  }

  .libottom1 {
    color: #666;
    display: inline-block;
    margin: 0;
    text-transform: uppercase;
    display: block;
    content: "";
    border-bottom: solid 2px;
    border-image: linear-gradient(
        to right,
        rgba(173, 0, 255, 1),
        rgba(0, 224, 255, 1)
      )
      1;

      @media screen  and (max-width:1000px) {
        border-bottom: none;
     }
   }

   .languages{

    @media screen  and (max-width:1000px) {
        /* padding-top: 10px; */
        margin-top: 10px !important;
        text-align: center;
        width: 300px;
        height: 50px;
        font-weight: 800;
        border-radius: 10px;
        background-color: white;
        color: red !important;
        cursor: pointer;
        border-image: linear-gradient(90deg,rgba(2,255,222,1) 41%,rgba(218,0,255,0.9668242296918768) 70%) !important;
        border-image-slice: 1 !important;
     }
   }

  .libottom2 {
    color: #666;
    display: inline-block;
    margin: 0;
    text-transform: uppercase;
    display: block;
    content: "";
    border-bottom: solid 2px;
    border-image: linear-gradient(
        to right,
        rgba(173, 0, 255, 1),
        rgba(0, 224, 255, 1)
      )
      1;

      @media screen  and (max-width:1000px) {
        border-bottom: none;
     }
   }

  .libottom1:after {
    display: block;
    content: "";
    border-bottom: solid 2px;
    border-image: linear-gradient(
        to right,
        rgba(173, 0, 255, 1),
        rgba(0, 224, 255, 1)
      )
      1;
    transform: scaleX(0);
    transition: transform 350ms ease-in-out;

    @media screen  and (max-width:1000px) {
      margin-top: 10px !important;
    }
  }
  .libottom:after {
    display: block;
    content: "";
    border-bottom: solid 2px;
    border-image: linear-gradient(
        to right,
        rgba(173, 0, 255, 1),
        rgba(0, 224, 255, 1)
      )
      1;
    transform: scaleX(0);
    transition: transform 350ms ease-in-out;

    @media screen  and (max-width:1000px) {
      margin-top: 10px !important;
    }
  }
  .libottom1:hover:after {
    transform: scaleX(1);
  }
  .libottom1:after {
    transform-origin: 0% 50%;
  }
  .libottom:hover:after {
    transform: scaleX(1);
  }
  .libottom:after {
    transform-origin: 0% 50%;
  }
`

export const FuncButton = styled.button`
 display: none;

  @media screen  and (max-width:1000px) {
      display: block;
      border-radius: 80px;
      border: none;
      text-align: center;
      margin-top: 50px !important;
      font-size: 20px;
      margin-top: 5rem !important;
      width: 300px;
      height: 50px;
      font-weight: 800;
      border-radius: 10px;
      background-color: #16e438ea;
      color: white !important;
      cursor: pointer;
      border-image: linear-gradient(90deg, rgba(2,255,222,1) 41%, rgba(218,0,255,0.9668242296918768) 70%) !important;
      border-image-slice: 1 !important;
  }

  @media screen  and (max-width:350px) {
        display: flex !important;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding-top: 5px;
        width: 250px;
    }
`


export const NavCenter= styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Center= styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  margin-top: 50px;

  @media screen  and (max-width:1160px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
`

export const Divleft = styled.div`
  display: flex;
  align-items: center;

  @media screen  and (max-width:700px) {
    justify-content: center;
     flex-direction: column;
   }

h1{
  color: #FFFFFF;
  margin: 0 20px;
}
`

export const Img = styled.img`
  width: 220px;
  height: 150px;

`

export const Divright = styled.div`
  display: flex;
  flex-direction: column;

  @media screen  and (max-width:1160px) {
    justify-content: center !important;
    align-items: center !important;
   }
  @media screen  and (max-width:600px) {
    width: 100% !important;
   }

  h6{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 34px;
  color: #FFFFFF;


    @media screen  and (max-width:1380px) {
      width: 90%;
     }
     @media screen  and (max-width:1000px) {
      text-align: center;
      margin-top: 20px;
    }

  }

  p{
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  margin-top: 10px;


   @media screen  and (max-width:1000px) {
      text-align: center !important;
   }
  }
  `

  export const Centerend = styled.div`
  display: flex;
  justify-content: right !important;
  align-items: center;

  @media screen  and (max-width:1000px) {
    flex-direction: column;
    justify-content: center !important;
    align-items: center;
    margin-top: 5rem;
   }

`
  export const Buttonclick = styled(Button)`
  width: 140px;
  height: 50px;
  right: 9rem;
  border-radius: 4px;
  background-color: #000000;
  color: white !important;
  cursor: pointer;
  border-image: linear-gradient(90deg, rgba(2,255,222,1) 41%, rgba(218,0,255,0.9668242296918768) 70%) !important;
  border-image-slice: 1 !important;

  @media screen  and (max-width:1000px) {
    display: flex;
    justify-content: center !important;
    right: 0rem !important;
    align-items: center;
    margin-top: 5rem;
   }

`

export const Galereya = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  @media screen  and (max-width:1100px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 0rem;
    display: none;
  }
`

export const Images = styled.div`
    display: flex;
    align-items: center !important;
    justify-content: left !important;
    /* margin-right: 11rem; */

    @media screen and (max-width: 1155px) {
        transform: scale(0.9);
        margin-left: 0px;
    }
    @media screen and (max-width: 1077px) {
        transform: scale(0.8);
        margin-right: 7rem;
    }
    @media screen and (max-width: 980px) {
        transform: scale(0.7);
        margin-right: 7rem;
    }
    @media screen and (max-width: 780px) {
        transform: scale(0.6);
        margin-right: 5rem;
    }
    @media screen and (max-width: 680px) {
      display: none;
    }

`

export const Items = styled.div`
    position: relative;
    top: 30px;
    /* margin-bottom: 10rem !important; */

    @media screen and (max-width: 680px) {
    align-items: center;
    justify-content: center;
    display: block !important;
    margin-right: 0rem;
    margin-bottom: 0rem !important;
  }

`
export const ImagesBorder = styled.div`
    margin-left: 145px;

    left: 100px;
    width: 1067px;
    height: 577px;
    box-shadow: 0px 0px 20px rgb(103, 103, 255);
    border: double 0.3em transparent;
    border-radius: 8px;
    background-image: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)),
    linear-gradient(to right, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;

    /* @media screen and (max-width: 680px) {
        display: none;
    } */
`


export const Ing = styled.div`
    width: 100%;
    height: auto;
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;

   @media screen and (max-width: 1100px) {
        display:flex;

        img{
          width: 80%;
          height: auto;
          box-shadow: 0px 0px 20px rgb(103, 103, 255);
          border: double 0.3em transparent;
          border-radius: 8px;
          background-image: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)),
          linear-gradient(to right, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1));
          background-origin: border-box;
          background-clip: content-box, border-box;
          margin: 20px 0;
        }
    }

  `

export const Item1 = styled.img`
    width: 300px;
    position: absolute;
    left: 150px;

`
export const Item2 = styled.img`
    width: 300px ;
    position: absolute;
    left: 450px;
`
export const Item3 = styled.img`
    width: 300px ;
    position: absolute;
    left: 450px;
    top: 142px;

`
export const Item4 = styled.img`
    width: 208px ;
    position: absolute;
    left: 750px;
`
export const Item5 = styled.img`
    width: 250px ;
    position: absolute;
    left: 958px;
`
export const Item6 = styled.img`
    width: 250px ;
    position: absolute;
    left: 958px;
    top: 137px;
`
export const Item7 = styled.img`
    width: 315px ;
    position: absolute;
    top: 280px;
    left: 142px;
`
export const Item8 = styled.img`
    width: 300px ;
    position: absolute;
    top: 430px;
    left: 150px;
`
export const Item9 = styled.img`
    width: 508px ;
    position: absolute;
    top: 285px;
    left: 450px;
`
export const Item10 = styled.img`
    width: 249px ;
    position: absolute;
    top: 275px;
    left: 958px;
`
  export const Buttext = styled.div`
    margin-top: 5rem;

      h1{
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 34px;
      color: #FFFFFF;
      margin-left:8rem;
      margin-top: 0rem;
      /* margin-left: 0rem !important; */

      @media screen  and (max-width:1000px) {
        text-align: center;
        margin-left: 0rem !important;
      }
    }
`
export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;

  @media screen  and (max-width:1000px) {
    text-align: center;
    margin-top: 0rem !important;
   }
   @media screen and (max-width: 680px) {
        flex-direction: column !important;
    }

`

export const Divend = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 5rem;

 @media screen  and (max-width:1000px) {
    display: flex;
   flex-direction: column;
   margin-top: 0rem !important;
   }
`

export const TextCenter = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 255px;
height: 240px;
margin: 0 10px;
border-radius: 4px;
color: white !important;
border: 2px solid;
cursor: pointer;
border-image: linear-gradient(90deg, rgba(2,255,222,1) 41%, rgba(218,0,255,0.9668242296918768) 70%) !important;
border-image-slice: 1 !important;

@media screen  and (max-width:1000px) {
    display: flex;
   flex-direction: column;
   margin: 1rem 1px;

   }

h1{
  font-family: 'Russo One';
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 168%;
  letter-spacing: 0.14em;
  color: #FFFFFF;
}

p{
  font-family: 'Russo One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 168%;
  text-align: center;
  letter-spacing: 0.14em;
  color: #FFFFFF;
}
  `

export const Cont= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    @media screen and (max-width: 700px) {
      transform: scale(0.9);
    }
    @media screen and (max-width: 600px) {

    }

`

// Inputs wrapper

export const InpWrapper = styled.div`
    width: 70%;
    margin: 0 auto;
    margin-top: 3rem;
    height: auto;
    display: flex;
    backdrop-filter: blur(20px);
    background: #ffffff94;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 200px;
    border: double 0.3em transparent;
    border-radius: 8px;
    background-image: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)),
    linear-gradient(to right, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;

    h1{
        font-weight: 400;
        font-size: 36px;
        line-height: 168%;
        letter-spacing: 0.14em;
        padding: 40px 0;
        color: #FFFFFF;
    }
    @media (max-width:660px) {
        width: 100%;
        backdrop-filter: blur(20px);
        background: #81818129;
        background-image: none;
        border: none;
        border-radius: 0px;
        background-image: none;
        background-origin: border-box;
        background-clip: content-box, border-box;
        margin-bottom: 0px;
    }
    @media (max-width:420px) {
        h1{
            font-size: 23px;
        }
    }
`

export const InpButtons = styled.div`
    width: 80%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        padding: 10px 30px;
        border: none;
        background-color: rgb(0,0,0,0);
        cursor: pointer;
        font-family: 'Russo one',sans-serif;
        font-weight: 400;
        border-radius: 5px;
        font-size: 26px;
        letter-spacing: 0.14em;
        color: #FFFFFF;
        transition: all ease 0.3s;
        border: 2px solid rgb(0,0,0,0);

        &:hover{
            background-color: #ffffff30;
        }
        &:active{
            opacity: 0.6;
        }
    }
    @media (max-width:1110px) {
        width: 90%;
    }
    @media (max-width:600px) {
        button{
            padding: 5px 15px;
            font-size: 20px;
        }
    }
    @media (max-width:400px) {
        button{
            font-size: 16px;
        }
    }
`

export const InpInputs = styled.div`
    width: 80%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width:1110px) {
        width: 90%;
    }
    @media (max-width:860px) {
        flex-direction: column;
    }
`

export const InputsWrapper = styled.div`
    width: 48%;
    height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    label{
        font-family: 'Montserrat',sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 22px;
        line-height: 168%;
        color: #FFFFFF;
        opacity: 0.5;
    }
    @media (max-width:860px) {
        width: 100%;
    }
    @media (max-width:500px) {
        label{
            font-size: 15px;
            line-height: 0px;
        }
    }
`

export const InpInput = styled.input`
    width: 100%;
    height: 58px !important;
    font-size: 18px;
    color: white;
    outline: none;
    border: none;
    background-color: rgb(0,0,0,0);
    border-bottom: 2px solid #FFFFFF;
    margin-bottom: 20px;

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
      @media (max-width:900px) {
        height: 5px;
    }
`

export const InputMiniWr = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const InputMini = styled.input`
    width: 45%;
    height: 40px;
    font-size: 18px;
    color: white;
    outline: none;
    border: none;
    background-color: rgb(0,0,0,0);
    border-bottom: 2px solid #FFFFFF;
    margin-bottom: 20px;

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
`

export const InpButtonWr = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const InpButton = styled.button`
    width: 304px;
    height: 52px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    border: 2px solid #8F00FF;
    background: #8F00FF;
    cursor: pointer;
    fill: #8F00FF;
    border-radius: 5.8px;
    transition: all ease 0.3s;
    /* &:hover{
        background-color: rgb(0,0,0,0);
    }
    &:active{
        transform: scale(0.9);
    }
    @media (max-width:470px) {
        width: 70%;
        height: 45px;
    } */

`

export const Selectinput = styled.select`
    width: 100%;
    height: 20px;
    font-size: 19px;
    outline: none;
    border: none;
    background: none;
    color: rgb(199, 199, 199);

    @media (max-width:1000px) {
        width: 124px !important;
        height: 80px !important;
        font-size: 18px;
    }
`
export const Option = styled.option`
    color: #6400e8f2;
    font-weight: 500;

    @media (max-width:1000px) {
        width: 50% !important;
        font-size: 14px;
    }
`

export const Div2 = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 450px;
 position: relative !important;

 @media (max-width:1160px){
    position: initial !important;
  }
 @media (max-width:460px){
    text-align: center;
    width: 250px !important;
    position: initial !important;
  }

`

export const H5 = styled.h1`
   position: absolute !important;
   font-family: 'Russo One' !important;
   font-style: normal;
   font-weight: 200 !important;
   font-size: 24px !important;
   letter-spacing: 0.1em;
   left: 0 !important;
   color: #FFFFFF;

   @media  (max-width:1160px) {
      text-align: center !important;
      margin-top: 20px !important;
      position: none;
  }
  @media (max-width:1160px){
    position: initial !important;
  }
`

export const Div3p = styled.p`
   font-family: 'Russo One'!important;
   font-style: normal;
   font-weight: 400;
   letter-spacing: 0.14em;
   margin-top: 30px !important;
   font-size: 18px !important;
   text-align: center;
   color: #9e9a9a !important;

   @media (max-width:460px){
      width: 300px;
      line-height: 35px !important;

    }
`

export const Div3 = styled.div`
 display: flex;
 width: 100%;

 @media screen  and (max-width:1160px) {
      justify-content: center !important;
      align-items: center !important;
   }

 p{
  text-align: center;
  /* margin: 20px 30px; */

    @media screen  and (max-width:1160px) {
      margin-top: 20px !important;
      font-size: 24px !important;
      text-align: center !important;
   }
 }
`

export const Divphoto = styled.div`
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 width: 100%;
 margin-top: 40px;

 @media screen and (max-width:900px) {
  justify-content: center !important;
  align-items: center !important;
  flex-direction: column !important;
 }
`
export const Divphot2 = styled.div`


`
export const Divphotoimg = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid;
width: 180px;
height: 180px;
border: none;
background-color: #ad00ff;
border-radius: 10px;
`
export const Photo2img = styled.img`
  width: 180px;
  height: 200px;
  object-fit: contain;
  border-radius: 30px;
  `

export const Photo2img1 = styled.img`
  width: 180px;
  height: 200px;
  object-fit: contain;
  border-radius: 30px;

  @media screen and (max-width:900px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    display: block !important;
    content: "" !important;
    border: 1px solid 2px !important;
    border-image: linear-gradient(
        to right,
        rgba(173, 0, 255, 1) !important,
        rgba(0, 224, 255, 1)
      )
      1 !important;
 }
`
export const Divphot3 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 55%;
  height: 135px;
  border: 2px dotted #4b48e7;

  @media screen and (max-width:900px) {
    margin-top: 20px;
    width: 60%;
 }
`
export const Label = styled.label`
display: flex;
justify-content: center;
align-items: center;
width: 192px;
height: 42px;
border:none;
color: #ffff;
background: #8F00FF;
cursor: pointer;
border-radius: 10px;
transition: all 1s;


:hover{
  transform: scale(1.1) !important;
  cursor: pointer;
  transition: all 1s;
  background-color: #5af31e;
  color: red;

 }
`
export const InpH3 = styled.h3`
color: #808191;

@media screen and (max-width:800px) {
  display: none;
 }
`
export const Input5 = styled.input`
  display: none;
`
export const Select12 = styled(Select)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  outline: none !important;
  border: none !important;
  background: none !important;
  line-height: 27px;
  color: black !important;
  transition: all 4s;

  @media screen  and (max-width:350px) {

  }
`