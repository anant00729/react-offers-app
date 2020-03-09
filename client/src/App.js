import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import AppBody from './ui/common/AppBody'
import {AppBar} from './ui/common/AppBar'
import {ToastMessage} from './ui/common/ToastMessage'
import {GlobalProvider} from './ui/context/GlobalState'


function App() {

  return (
   <GlobalProvider>
     <Router>
      <AppBar/>
      <AppBody/>
      <ToastMessage/>
     </Router>
   </GlobalProvider>
  );
}

export default App;
