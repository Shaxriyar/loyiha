import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import FeedIcon from '@mui/icons-material/Feed';
// import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
// import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import PhotoIcon from '@mui/icons-material/Photo';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//icons
import GroupsIcon from '@mui/icons-material/Groups';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
//Icons mui
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

//import img
import phone4 from "./Phone/cyber2.png";

import { Photoimg , Photo, Localniset, FacebookOutlinedIcon1, TelegramIcon2, InstagramIcon3, YouTubeIcon4, IconDiv } from './StyleDrawer';

import { Icon } from '@mui/material';

export default function TemporaryDrawer({state,setState}) {


   // Start main Gamburger ishlatish
   let maindata = [
     {
      id:1,
      name:"Biz haqimizda",
      son:500,
      icon:<GroupsIcon />
     },

     {
      id:1,
      name:"Turnirlar",
      son:2800,
      icon:<SportsEsportsIcon/>
     },

     {
      id:1,
      name:"Xisob",
      son:9300,
      icon:<ScoreboardIcon/>

     },
     {
      id:1,
      name:"Rasmlar",
      son:5000,
      icon:<CameraAltIcon/>
     },
     {
      id:1,
      name:"Ro'yhatdan otish",
      son:10500,
      icon:<AppRegistrationRoundedIcon />
     },
   ]

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


   // Start Gamburger
    const Scrolling = (son) =>{
      window.scrollTo({
        top:son,
        behavior: "smooth"
      })
    }
  // End Gamburger


  const list = (anchor) => (
    <Box
      sx= {{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, backgroundColor:"green", color:"white", height:"100vh" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <Photo>
        <Photoimg src={phone4} alt="" />
        <div>

        </div>
      </Photo>

   <List>
          {
            maindata?.map((item,index)=>{
              return(
          <ListItem key={index}  disablePadding>
                <ListItemButton onClick={()=>Scrolling(item.son)}>
                <ListItemIcon>
                    <div style={{color: 'white'}}>{item.icon}</div>
                  </ListItemIcon>
                  <ListItemText  primary={item.name} />
                </ListItemButton>
          </ListItem>
              )
            })
          }

      </List>

      <Localniset>
        <IconDiv>
          <div>
            <FacebookOutlinedIcon1 onClick={()=>window.open('https://ru-ru.facebook.com')}/>
            <TelegramIcon2  onClick={()=>window.open('https://telegram.org.ru/494-registraciya-v-telegramm.html')}/>
            <InstagramIcon3 onClick={()=>window.open('https://download-instagram.ru/kak-zaregistrirovatsya-v-instagram.html')}/>
            <YouTubeIcon4   onClick={()=>window.open('https://www.youtube.com/')}/>
          </div>
        </IconDiv>
      </Localniset>

    </Box>
  );

  return (
    <div >
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>

        </React.Fragment>
      ))}
    </div>
  );
}
