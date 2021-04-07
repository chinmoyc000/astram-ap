import React, { Component } from 'react';

//import './styles/foundation.min.css';
//import './styles/custom.css';
//import './styles/css/bootstrap.min.css';
import './assets/css/style.css';


import Routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import MobileHeader from './components/MobileHeader/MobileHeader';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {

  constructor(){
    super();
    this.state={
      appName: "ASTRAM"
    }
  }

  render() {
    return (
     
          <Routes/>
          
    );
  }
}

export default App;
