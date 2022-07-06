import React, { useEffect, useState } from 'react';

import { Container, Centertop, CenterH1, Centerend, Box, Div } from './DigitalStyle';

//bgc img
import rasm from "../2-Digital/phone/1.png"
import rasm2 from "../2-Digital/phone/2.png"
import rasm3 from "../2-Digital/phone/3.png"
import rasm4 from "../2-Digital/phone/4.png"

//Axios import
import axios from "axios"

 //Api import
const API2 = "http://159.65.207.213/api/blog/"

const Digital = () => {

  // Start API ulash
  const [data, setData] = useState([]);

   useEffect(() => {
     axios.get(API2)
     .then(res=>{
      setData(res.data)
      // console.log(res.data, 'bor');
     })
   }, [])
   //End API ulash

  return (
    <Container >
       <Div>
         <Centertop>
            <h1 data-aos="fade-up"
     data-aos-duration="3000" >Digital City — профессиональная игровая организация, созданная в 2019 году. Наша цель — объединить самых талантливых киберспортсменов со всего мира.</h1>
            </Centertop>

            <Centerend data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                  {
                     data?.map((item,index)=>{
                        return(
                         <Box key={index}>
                           <img src={`http://159.65.207.213${item.image}`} alt="" />
                           <h1>{item.title}</h1>
                           <p>{item.text}</p>
                         </Box>
                        )
                     })
                  }
               </Centerend>
         </Div>

     </Container>
  );
}

export default Digital;
