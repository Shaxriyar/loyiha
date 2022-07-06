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
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import PhotoIcon from '@mui/icons-material/Photo';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function TemporaryDrawer({state,setState}) {


   // Start main Gamburger ishlatish
   let maindata = [
     {
      id:1,
      name:"О нас",
      son:500,
     },

     {
      id:1,
      name:"Турниры",
      son:2800,
     },

     {
      id:1,
      name:"Счёты",
      son:9300,
     },
     {
      id:1,
      name:"Фото",
      son:5000,
     },
     {
      id:1,
      name:"Регистрация",
      son:10500,
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

   <List>
          {
            maindata?.map((item,index)=>{
              return(
          <ListItem key={index}  disablePadding>
                <ListItemButton onClick={()=>Scrolling(item.son)}>
                <ListItemIcon>
                    <ArrowForwardIosIcon />
                  </ListItemIcon>
                  <ListItemText  primary={item.name} />
                </ListItemButton>
          </ListItem>
              )
            })
          }

      </List>
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
