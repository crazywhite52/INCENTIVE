import React, { Component } from 'react';
import Routes from '../src/components/Routes';
import TopNavigation from './components/topNavigation';

import SideNavigation from './components/sideNavigation';
import Footer from './components/Footer';
import { SnackbarProvider } from "notistack";
import AuthService from './components/authlogin/AuthService'
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }
  // componentDidMount(){
  //   console.log(this.Auth.loggedIn()) 
  // }
  render() {
    return (
      <div className="flexible-content" style={{ background: '#ffffff' }}>
        <TopNavigation />
        <SideNavigation />
        <div style={{ fontFamily: "Prompt", color: "#8089a0" }}>
          <main
            id="content"
            className="p-5"
          // style={{paddingTop:0}}

          >

            <SnackbarProvider
              maxSnack={3}
              autoHideDuration={3000}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
            > <Routes /></SnackbarProvider>

          </main>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
