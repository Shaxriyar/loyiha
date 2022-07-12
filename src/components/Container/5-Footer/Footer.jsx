import React, {  useEffect, useState } from 'react';

import { Container, Foot, Footleft, Icon, Footcenter, Footright, FacebookOutlinedIcon1, TelegramIcon2, InstagramIcon3, YouTubeIcon4, Footright1, Inpbutton, End, Checkbox1, EmailDiv, EmailIc,Text, Link22, Foot2, Foot3, Typography2} from './FooterStyle';

//Icons mui
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Checkbox from '@mui/material/Checkbox';

//bgc img
import rasm1 from "../5-Footer/Phone/2.png";

//Axios import
import axios from "axios"

 // start import scrolll
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


  //  START  SCROLL TO TOP
import ScrollToTop from "react-scroll-to-top";
  //  END  SCROLL TO TOP

 // start scrolll
const useStyles = makeStyles({
  link: {
    color: 'white',
    position: 'relative',
    fontSize: "30px",
    fontFamily: 'Montserrat',
    fontWeight: "600",
    backgroundImage:"",
    transition: "all 1s",

    '&:before': {
      content: "''",
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: '0px',
      left: '50%',
      transform: 'translate(-50%,0%)',
      backgroundColor: 'green',
      transformOrigin: 'center',
      visibility: 'hidden',
      transition: 'all 0.3s ease-in-out',
    },
    '&:hover:before': {
      visibility: 'visible',
      width: '100%',
    },
    '&:hover': {
      transition: "all 1s",
      transform: "scale(1.2)",
    },
  },
});


 //Api import
 const API5 = "http://159.65.207.213/api/game/"

const Footer = () => {
  // start scrolll
  const classes = useStyles()
  //end scroll

 // Start API ulash
 const [data, setData] = useState([]);

 // Start input malumot jonatish joyi
 const [email, setEmail] = useState('')

  const Submit = () => {
    let  formData = new FormData();
    formData.append('email',email)
    axios.post('http://159.65.207.213/api/email/',formData)
    .then((res)=>{
      console.log(res);
      setEmail('');
    })
  }
  //End Api


 useEffect(() => {
   axios.get(API5)
   .then(res=>{
    setData(res.data)
    // console.log('qalay endi bu hayot',data,);
   })
 }, [])
 //End API ulash

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
  return (
    <Container >
      <Foot /*data-aos="fade-up"
    data-aos-duration="3000"*/>
      {/* <Foot2> */}
      <Footleft >
              <img src={rasm1} alt="" />
               <Icon>
                <FacebookOutlinedIcon1 onClick={()=>window.open('https://ru-ru.facebook.com')}/>
                <TelegramIcon2  onClick={()=>window.open('https://telegram.org.ru/494-registraciya-v-telegramm.html')}/>
                <InstagramIcon3 onClick={()=>window.open('https://download-instagram.ru/kak-zaregistrirovatsya-v-instagram.html')}/>
                <YouTubeIcon4   onClick={()=>window.open('https://www.youtube.com/')}/>
              </Icon>
            </Footleft>

            <Footcenter>
              <Link onClick={()=>Scrolling(500)} underline="never" className={classes.link}>
                <Typography component="span">Biz haqimizda</Typography>
              </Link>
              <Link onClick={()=>Scrolling(1600)} underline="never" className={classes.link}>
                <Typography component="span">Turnirlar</Typography>
              </Link>
              <Link onClick={()=>Scrolling(3900)} underline="never" className={classes.link}>
                <Typography component="span">Xisob</Typography>
              </Link>
              <Link onClick={()=>Scrolling(1800)} underline="never" className={classes.link}>
                <Typography component="span">Rasm</Typography>
              </Link>
            </Footcenter>
       {/* </Foot2> */}
{/*
        <Foot3> */}
          <Footright>
            {
                 data?.map((item,index)=>{
                   return(
                    <Footcenter>
                      <Link onClick={()=>Scrolling(1580)} underline="never" className={classes.link}>
                    <Typography2 component="span">{item.name}</Typography2>
                    </Link>
                    </Footcenter>
                   )
                })
            }

          </Footright>

            <Footright1>
                <h1>Bizning axborot byulletenlariga a'zo bo'ling</h1>
                <p> Eng so'nggi yangilanishlar va maxsus takliflarni olishni xohlaysizmi?<br/> Haftalik axborot byulletenlarini olish uchun <br/> quyidagi elektron pochtangizni kiriting..</p>
                <Inpbutton>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Your email'/>
                  <EmailDiv>
                      <EmailIc onClick={Submit}/>
                  </EmailDiv>
                </Inpbutton>
                <End>
                  <Checkbox1/>
                  <h3>Men axborot byulletenlarini yuborish shartlarini qabul qilaman.</h3>
                </End>
              </Footright1>
        {/* </Foot3> */}
      </Foot>

         <Text><h1>Raqamli shahar tomonidan mualliflik huquqi 2022</h1></Text>
    </Container>
  );
}

export default Footer;
