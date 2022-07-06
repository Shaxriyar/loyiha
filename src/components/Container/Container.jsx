import { Drawer } from '@mui/material';
import React from 'react';

import Cyber from './1-Cyber/Cyber';
import Digital from './2-Digital/Digital';
import Qoshish from './3-Qoshish/Qoshish';
import Turnir from './4-Turnir/Turnir';
import Footer from './5-Footer/Footer';

const Container = () => {
  return (
    <>
      <Cyber />
      <Digital />
      <Qoshish />
      <Turnir />
    </>
  );
}

export default Container;
