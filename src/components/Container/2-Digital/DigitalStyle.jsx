import styled from "styled-components";

//bgc img
import rasm from "../2-Digital/phone/1.png"

export const Container = styled.div`
width: 100%;
/* height: 100vh; */
background-image: url(${rasm})!important;
background-size: cover !important;
background-repeat: no-repeat !important;
cursor: pointer;
/* linear-gradient(rgba(0, 0, 0, 0.7)), */
`
export const Centertop = styled.div`
width: 80%;

@media screen and (max-width:550px) {
  width: 100%;
}

h1{
  text-align: center;
  font-family: 'Russo One';
  font-size: 36px;
  text-align: center;
  letter-spacing: 0.14em;
  color: #FFFFFF;
  margin-top: 2rem;

  @media screen and (max-width:540px) {
   font-size: 28px;
}
  @media screen and (max-width:370px) {
   font-size: 24px;
}
  @media screen and (max-width:300px) {
   font-size: 20px;
}

}
`

export const Centerend = styled.div`
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 width: 80%;
 margin-top: 8rem;
 margin-bottom: 80px;
 /* border: 2px solid red; */
/* linear-gradient(rgba(0, 0, 0, 0.7)), */

  @media screen and (max-width:1157px) {
       width: 100%;
    }

    @media screen and (max-width:1009px) {
      margin-right: 0px;
      margin-left: 0px;
      width: 85%;
    }

    @media screen and (max-width:940px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    @media screen and (max-width:540px) {
      margin-top: 0px;
    }


`
  export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 289px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  transform: rotate(360deg);
  padding-bottom: 6rem;
  margin-right: 30px;
  margin-left: 30px;
  transition: all 1s;

  &:hover{
    transform: scale(1.1);
    color: gray;
    transition: all 1s;
    }

    @media screen and (max-width:1009px) {
      margin-right: 10px;
      margin-left: 10px;
    }

    @media screen and (max-width:940px) {
      width: 50%;
      margin-right: 0px;
      margin-left: 0px;
      margin: 30px;
    }
    @media screen and (max-width:700px) {
      width: 80%;
      height: 340px;
    }

    @media screen and (max-width:550px) {
      width: 100%;
      height: 340px;
  }
    @media screen and (max-width:450px) {
      width: 100%;
      height: 340px;
      margin: 60px;
  }

  h1{
  text-align: center;
  font-family: 'Russo One';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  margin-top: 15px;
  color: #FFFFFF;
    @media screen and (max-width:700px) {
      font-size: 34px;
    }
    @media screen and (max-width:400px) {
      font-size: 20px;
    }
  }

  p{
  font-family: 'Montserrat';
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #d4cfcf;
  margin-top: 10px;
  @media screen and (max-width:700px) {
      font-size: 26px;
    }
    @media screen and (max-width:400px) {
      font-size: 16px;
    }
  }

`

  export const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  `
