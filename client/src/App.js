import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import AppBody from './ui/common/AppBody'
import {AppBar} from './ui/common/AppBar'
import {ToastMessage} from './ui/common/ToastMessage'
import {GlobalProvider} from './ui/context/GlobalState'
import {AppDialog} from './ui/common/AppDialog'
import {ImageDialog} from './ui/common/ImageDialog'




function App() {

  return (
   <GlobalProvider>
     <Router>
      <AppBar/>
      <AppBody/>
      <ToastMessage/>
      <AppDialog/>
      <ImageDialog/>
     </Router>
   </GlobalProvider>
  );
}

export default App;
