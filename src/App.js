// import React from 'react';
// import logo from './logo.svg';
import './App.css';

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

import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
// import Bookmarks from '@material-ui/icons/Bookmarks';

// import TextField from '@material-ui/core/TextField';
import Navbar from './Navbar';
// import MediaCard from './Cards';
//  import SideBar from './sidebar';


class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar />
        
        {/* <SideBar /> */}
        {/* <Button variant="outlined" color="primary">
          <Bookmarks></Bookmarks>
        </Button> <br />
        <TextField
          placeholder="Placeholder here"
          label="Basic TextField" />
          <MediaCard /> */}
      </div>
    );
  }
}

export default App;
