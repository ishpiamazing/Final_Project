// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
//import  Navbar  from './components/Navbar';
import NavigationBar from './components/NavigationBar'
import Sidebar from './components/Sidebar';
//import  ClientList  from './components/ClientList';
//import AddClient from './components/AddClient';
//import background from './images/background.jpg'

import Routes from './components/Routes';


// import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
// import themeDefault from "./themeDefault";


function App() {
  return (

  <Router>
    {/* <MuiThemeProvider theme={themeDefault}> */}
      <div className="container-fluid" style = {{padding:0}} >       
       <NavigationBar />
       <Sidebar />
       <Routes />
      </div>
    {/* </MuiThemeProvider> */}
  </Router>

    
  );
}

export default App;
