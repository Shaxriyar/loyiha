import React, { useEffect, useState } from 'react';

import { Container, Navbar, Navbarright, Navbarleft, Div, Link, Button, BtnWrap, Center, MenuBtn, MuiButton, ScrollToTop1} from './CyberStyle';

//mui-icons import qilindi
import {Menu} from "@mui/icons-material"

//rasm
import phone from "../1-Cyber/Phone/cyber2.png"
import rasm from "../1-Cyber/Phone/photo_.jpg"


import TemporaryDrawer from './Drawer';

import { red } from '@mui/material/colors';

// Axios import
import axios from 'axios';

  //  START  SCROLL TO TOP
  import ScrollToTop from "react-scroll-to-top";
  //  END  SCROLL TO TOP

// //Api import
const API = "http://159.65.207.213/api/info/"

const Cyber = () => {

  // Start API ulash
  const [data, setData] = useState({});

   useEffect(() => {
     axios.get(API)
     .then(res=>{
      setData(res.data)
      // console.log(res.data, 'rrr');
     })
   }, [])
   //End API ulash

  //NAV scroll
  const [navSize, setnavSize] = useState('10rem');
  const [navColor, setnavColor] = useState('transparent');
  const listenScrollEvent = () =>{
    window.scrollY > 10 ? setnavColor("#5757f1a9") : setnavColor("transparent");
    window.scrollY >10 ? setnavSize("6rem") : setnavSize("10rem");
  };

  useEffect(() => {
   window.addEventListener("scroll", listenScrollEvent);
   return()=>{
    window.removeEventListener("scroll", listenScrollEvent);
   };
  }, []);


 // LINK SCROLL
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const Scrolling = (val) => {
    window.scrollTo({
      top:val,
      behavior:'smooth'
    })
  }
   // End LINK SCROLL

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (

  <Container >

  <Navbar style={{
    backgroundColor:navColor,
    height:navSize,
    transition:"all 1.5s"
  }}>

      <Navbarright>
            <img src={`http://159.65.207.213${data.logo}`} alt="" />
      </Navbarright>

        <Navbarleft>
            <Div>
              <button onClick={()=>Scrolling(500)}>О нас</button>
              <button onClick={()=>Scrolling(1600)}>Турниры</button>
              <button onClick={()=>Scrolling(3300)}>Счёты</button>
              <button onClick={()=>Scrolling(2700)}>Фото</button>
            </Div>

          <MuiButton onClick={()=>Scrolling(3700)} variant='contained'>Регистрация</MuiButton>

            <BtnWrap>
                <MenuBtn onClick={toggleDrawer('right', true)} >
                    <Menu style={{color:"white"}}/>
                </MenuBtn>
            </BtnWrap>

        </Navbarleft>
   </Navbar>

  {/* START  SCROLL TO TOP */}
     <ScrollToTop1 smooth top="20" />
     <ScrollToTop  smooth top="20" />
    {/* END  SCROLL TO TOP */}

      <Center>
          <h1  data-aos="zoom-in"
     data-aos-duration="3000">ДОБРО ПОЖАЛОВАТЬ В ИГРУ <br/> <span>DC CYBER</span> В <br/> КИБЕРСПОРТИВНЫХ ИГРАХ</h1>
      </Center>

     <TemporaryDrawer state={state} setState={setState}/>

    </Container>
  );
}

export default Cyber;
