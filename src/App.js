import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Header } from './component/header/Header'
import { Body } from './component/body/Body'

import GlobalProvider from './component/hooks/Global';
 
function App() {
  return (
    <GlobalProvider>
      <Container maxWidth="sm">
          <Header/>
          <Body/>
      </Container>
    </GlobalProvider>
   
  );
}

export default App;
