import React, { useContext, useEffect, useState } from "react";

//mui.com import qilindi
import Button from "@mui/material/Button";

import {
  Container2, Navbar, Left, Right, NavCenter, Center, Divleft, Img, Divright, Buttonclick, Centerend, Buttext, Galereya, Ing,  TextCenter, FuncButton, Divend,  Cont, InpWrapper, InpButtons, InpInputs, InputsWrapper, InputMini, InputMiniWr, InpButton, InpInput, InpButtonWr,  Option, Div2, Div3, H5, H6, Div3p, Divphoto, Divphot2, Divphot3, Photo2img, Label, Input5, InpH3, Divphotoimg, Photo2img1, Select12, Selectinput,} from "./TurnirStyle";

//bgc img
import phone4 from "../4-Turnir/Phone/4.png";

// Start Img img
import Img1 from "../4-Turnir/Galerphoto/Rectangle 176.png";
import Img2 from "../4-Turnir/Galerphoto/Rectangle 177.png";
import Img3 from "../4-Turnir/Galerphoto/Rectangle 178.png";
import Img4 from "../4-Turnir/Galerphoto/Rectangle 183.png";
import Img5 from "../4-Turnir/Galerphoto/Rectangle 179.png";
import Img6 from "../4-Turnir/Galerphoto/Rectangle 180.png";
import Img7 from "../4-Turnir/Galerphoto/Rectangle 181.png";
import Img8 from "../4-Turnir/Galerphoto/Rectangle 182.png";
import Img9 from "../4-Turnir/Galerphoto/Rectangle 184.png";
import Img10 from "../4-Turnir/Galerphoto/Rectangle 185.png";
   // End Img img

  // Start Grid img
import Gridimg1 from "../4-Turnir/Galerphoto/Rectangle 176.png";
import Gridimg2 from "../4-Turnir/Galerphoto/Rectangle 177.png";
import Gridimg3 from "../4-Turnir/Galerphoto/Rectangle 178.png";
import Gridimg4 from "../4-Turnir/Galerphoto/Rectangle 183.png";
import Gridimg5 from "../4-Turnir/Galerphoto/Rectangle 179.png";
import Gridimg6 from "../4-Turnir/Galerphoto/Rectangle 180.png";
import Gridimg7 from "../4-Turnir/Galerphoto/Rectangle 181.png";
import Gridimg8 from "../4-Turnir/Galerphoto/Rectangle 182.png";
import Gridimg9 from "../4-Turnir/Galerphoto/Rectangle 184.png";
import Gridimg10 from "../4-Turnir/Galerphoto/Rectangle 185.png";

//Colorthoto img
import Color from "../4-Turnir/Colorphoto/1.jpg";

import "./Turnir.css";

//Select import qilindi

//Axios import
import axios from "axios"

//Стрелка import


// Start Filter map scroll//
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
// End Filter map scroll//

// //Api import
const API1 = "http://159.65.207.213/api/number/"
const API2 = "http://159.65.207.213/api/photo/"
const API3 = "http://159.65.207.213/api/competition/"

 //Api import
 const API5 = "http://159.65.207.213/api/game/"


const Turnir = () => {

   // Start API ulash
 const [game, setGame] = useState([]);
 const [Arman, setArman] = useState([]);

 useEffect(() => {
   axios.get(API5)
   .then(res=>{
    setGame(res.data);
    var bestarr = []
    res.data.filter((item)=>{
      bestarr.push(item.name)
    })
    setArman(bestarr)
    // console.log('Game fil',bestarr);
   })
 }, [])
 //End API ulash


  // Start API ulash
  const [data, setData] = useState([]);

  const [category1, setcategory1] = useState('Все');
  // console.log('category',category1);
   useEffect(() => {
     axios.get(API3)
     .then(res=>{
      let filtered = res.data.filter((item)=>{
        if(item.game.name === category1){
          return item
        }
        if(category1 ==='Все'){
          return item
        }
      })
      setData(filtered)
      // console.log('========', res.data);
     })
   }, [category1,setcategory1])
   //End API ulash


 // Start API ulash
 const [data2, setData2] = useState([]);

 useEffect(() => {
   axios.get(API2)
   .then(res=>{
    setData2(res.data)
    // console.log('Photos',data2);
   })
 }, [])
 //End API ulash


 // Start API ulash
 const [data3, setData3] = useState([]);

 useEffect(() => {
   axios.get(API1)
   .then(res=>{
    setData3(res.data)
    // console.log('qalay',data3);
   })
 }, [])
 //End API ulash


  // Start Filter start map scroll//
  const [globalbolen, setglobalbolen] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
    // End Filter start map scroll//

  //INPUT CATEGORIY
  const [category, setCategory] = useState('solo');

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      if (windowDimensions.width > 1000) {
        setglobalbolen(true);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setWindowDimensions]);

  // console.log(windowDimensions);

  const openMenu = () => {
    setglobalbolen(!globalbolen);
  };
  //Filter end map scroll//

  // Start Button LINK SCROLL
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const Scrolling = (val) => {
    window.scrollTo({
      top: val,
      behavior: "smooth",
    });
  };
  // End Button LINK SCROLL

  //  Start filter map


  const arr1 = []
  const arr2 = []

  const options = [

  ]

  for (let i = 0; i < Arman.length; i++) {
    if (arr1.length <= 4) {
      arr1.push(Arman[i]);
    } else {
      arr2.push({
        value:Arman[i],
        label:Arman[i]
      });

      // console.log(arr2);
    }
  }

  //  End filter map


  // Start input file uploader
  const [avatar, setAvatar] = useState('')

  console.log(avatar)

  const SetImage = (e)=>{
    const rasm = e.target.files[0]
    setAvatar(URL.createObjectURL(rasm))
  }



  //registratsiya input

  //Player 1 one game useState
  const [Isim, setIsim] = useState('');
  const [Surname, setSurname] = useState('');
  const [Email, setEmail] = useState('');
  const [Form, setForm] = useState('');
  const [To, setTo] = useState('');
  const [Napravleniya, setNapravleniya] = useState(0);
  const [Phone, setPhone] = useState('');

  //Player 2 one game useState
  // const [Isim2, setIsim2] = useState('');
  // const [Surname2, setSurname2] = useState('');
  // const [Email2, setEmail2] = useState('');
  // const [Form2, setForm2] = useState('');
  // const [To2, setTo2] = useState('');
  // const [Napravleniya2, setNapravleniya2] = useState(0);
  // const [Phone2, setPhone2] = useState('');


  //FormData1
  let formData = new FormData()
  formData.append('player_type',1)
  formData.append('name',Isim)
  formData.append('surname',Surname)
  formData.append('email',Email)
  formData.append('experience_form',Form)
  formData.append('experince',To)
  formData.append('game',Napravleniya)
  formData.append('phone',Phone)
  formData.append('img',avatar)
  formData.append('team_member',1)

  //FormData2
  let formData2 = new FormData()
  // formData.append('player_type',2)
  // formData.append('name',Isim2)
  // formData.append('email',Email2)
  // formData.append('experience_form',Form2)
  // formData.append('experince',To2)
  // formData.append('game',Napravleniya2)
  // formData.append('phone',Phone2)
  // formData.append('img',avatar)
  // formData.append('team_member',Surname2)


  const OneGameSubmit = ()=>{
    try {
      axios.post('http://159.65.207.213/api/user/',formData)
      .then((res)=>{
        console.log('Kelovr',res);
        setIsim('')
        setSurname('')
        setEmail('')
        setForm('')
        setTo('')
        setNapravleniya('')
        setPhone('')
      })


    } catch (err) {
      console.log(err);
    }
  }

  //   try {
  //     axios.post('http://159.65.207.213/api/user/',formData2)
  //     .then((res)=>{
  //       console.log('Kelovr',res);
  //       setIsim('')
  //       setSurname('')
  //       setEmail('')
  //       setForm('')
  //       setTo('')
  //       setNapravleniya('')
  //       setPhone('')
  //     })


  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <Container2 >
      <Navbar>
        <Left>
          <h1> Последние турниры</h1>
        </Left>

        <FuncButton onClick={openMenu}>Название игры</FuncButton>

        <Right bolen={globalbolen}>
          {arr1 &&
            arr1.map((e, i) => (
              <li  onClick={()=>setcategory1(e)} className="libottom" key={i}>
                {e}
              </li>
            ))}
          {/* <li className='libottom'  onClick={()=>Scrolling(200)}>CS:GO</li> */}
          {/* <li className='libottom'  onClick={()=>Scrolling(300)}>DOTA 2</li> */}

            <Select12 placeholder="Other"  className="libottom" name="cars" id="lang" options={arr2} />

        </Right>
      </Navbar>

      <NavCenter>
          {
            data?.map((item,index)=>{
              return(
          <Center>
             <Divleft data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Img src={`http://159.65.207.213${item.user1.img}`} alt="" />
                 <h1>VS</h1>
                <Img src={`http://159.65.207.213${item.user2.img}`} alt="" />
              </Divleft>
              <Divright>
                  <Div2 data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                      <H5 >{item.user1.name} - {item.user2.name} {item.game.name} </H5>
                  </Div2>
                  <Div3 data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <Div3p>{item.data}</Div3p>
                 </Div3>
              </Divright>
        </Center>
              )
            })
          }

      </NavCenter>

      <Centerend>
        <Buttonclick variant="outlined">Записаться</Buttonclick>
      </Centerend>

      <Buttext>
        <h1>Фото Галерея</h1>
      </Buttext>

      <Galereya data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
        <div class="angry-grid">
            <div id="item-0">
              <img className="grid2" src={Gridimg1} alt="" />
            </div>
            <div id="item-1">
              <img className="grid2" src={Gridimg2} alt="" />
            </div>
            <div id="item-2">
              <img className="grid3" src={Gridimg3} alt="" />
            </div>
            <div id="item-3">
              <img className="grid4" src={Gridimg8} alt="" />
            </div>
            <div id="item-4">
              <img className="grid5" src={Gridimg5} alt="" />
            </div>
            <div id="item-5">
              <img className="grid6" src={Gridimg10} alt="" />
            </div>
            <div id="item-6">
              <img className="grid7" src={Gridimg9} alt="" />
            </div>
            <div id="item-7">
              <img className="grid8" src={Gridimg5} alt="" />
            </div>
            <div id="item-8">
             <img className="grid9" src={Gridimg7} alt="" />
            </div>
             <div id="item-9">
             <img className="grid10" src={Gridimg4} alt="" />
            </div>
        </div>
      </Galereya>

        <Ing>
          <img src={Img1} alt="" />
          <img src={Img2} alt="" />
          <img src={Img3} alt="" />
          <img src={Img8} alt="" />
          <img src={Img9} alt="" />
          <img src={Img10} alt="" />
          <img src={Img5} alt="" />
          <img src={Img6} alt="" />
          <img src={Img7} alt="" />
          <img src={Img4} alt="" />
        </Ing>

      <Divend>
        {
          data3?.map((item,index)=>{
            return(
              <TextCenter data-aos="fade-up"
              data-aos-anchor-placement="top-center">
                <h1>{item.number}</h1>
                 <p>{item.text}</p>
            </TextCenter>
            )
          })
        }
      </Divend>

      <Cont>

   {/* Start Inwrapper */}
       <InpWrapper /*data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"*/>
              <h1>Регистрация</h1>
              <InpButtons>
                <button
                onClick={() => setCategory("solo")}
                className="btn2"
                style={{border:category==='solo' ? '2px solid rgba(87, 87, 241, 0.663)' : '',backgroundColor:category==='solo'?'#ffffff30':'' }}

                >Один игрок</button>

                <button
                onClick={() => setCategory("squad")}
                className="btn3"
                style={{border:category==='squad' ? '2px solid rgba(87, 87, 241, 0.663)' : '' , backgroundColor:category==='squad'?'#ffffff30':''}}

                >Команда</button>
              </InpButtons>

                <Divphoto>
                    <Divphot2>
                      {
                        avatar === '' ?
                       <Divphotoimg>
                          <Photo2img src={phone4} alt="" />
                       </Divphotoimg>
                        :

                        <Photo2img1 src={avatar} alt="" />

                      }
                    </Divphot2>
                    <Divphot3>
                        <InpH3>Fayl yuklang</InpH3>
                        <Label  htmlFor="file-upload" class="custom-file-upload">Avatar yuklang</Label>
                      <Input5 onChange={(e)=>SetImage(e)} id="file-upload" type="file"/>
                    </Divphot3>
                </Divphoto>

                {
                  category === 'solo' ?

                  <InpInputs>
                    <InputsWrapper>
                      <label htmlFor="">Имя</label>
                      <InpInput value={Isim} onChange={(e)=>setIsim(e.target.value)}/>
                      <label htmlFor="">Фамилия</label>
                      <InpInput value={Surname} onChange={(e)=>setSurname(e.target.value)}/>
                      <label htmlFor="">Почта</label>
                      <InpInput value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                    </InputsWrapper>
                    <InputsWrapper>
                        <label htmlFor="">Опыт(год)</label>
                      <InputMiniWr>
                        <InputMini placeholder='От' value={Form} onChange={(e)=>setForm(e.target.value)}/>

                        <InputMini placeholder='До' value={To} onChange={(e)=>setTo(e.target.value)}/>
                      </InputMiniWr>
                      <label htmlFor="">Направления</label>
                      <Selectinput  onChange={(e)=>setNapravleniya(e.target.value)}>
                        {
                          game?.map((item,index)=>{
                            return(
                              <Option key={index} >{item.name}</Option>
                            )
                          })
                        }
                     </Selectinput>
                      <InpInput/>
                      <label htmlFor="">Телефон</label>
                      <InpInput value={Phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </InputsWrapper>
                  </InpInputs>

                  :
                  <InpInputs>
                    <InputsWrapper>
                      <label htmlFor="">Названия</label>
                      <InpInput/>
                      <label htmlFor="">Число игроков</label>
                      <InpInput/>
                      <label htmlFor="">Почта Лидера</label>
                      <InpInput/>
                    </InputsWrapper>
                    <InputsWrapper>
                        <label htmlFor="">Опыт(год)</label>
                      <InputMiniWr>
                        <InputMini placeholder='От'/>
                        <InputMini placeholder='До'/>
                      </InputMiniWr>
                      <label htmlFor="">Направления</label>
                      <Selectinput>
                        {
                          game?.map((item,index)=>{
                            return(
                              <Option >{item.name}</Option>
                            )
                          })
                        }
                     </Selectinput>
                      <InpInput/>
                      <label htmlFor="">Телефон Лидера</label>
                      <InpInput/>
                    </InputsWrapper>
                  </InpInputs>
                }

    {/* End Start Inwrapper */}

              <InpButtonWr>
                <InpButton onClick={OneGameSubmit}>Отправить</InpButton>
              </InpButtonWr>
            </InpWrapper>
      </Cont>
    </Container2>
  );
};

export default Turnir;
