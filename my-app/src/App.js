import React from 'react'
import { Link } from 'react-router-dom';
import logo from './pics-vids/logo.svg';
import vid from './pics-vids/gate-vid.mp4'
import "./style.css";
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <video
        id="background-video"
        autoPlay
        loop
        muted
      >
        <source
          src={vid}
          type="video/mp4"
        />
      </video>
      <h1>ENCHANTED TO MEET YOU</h1>
      <main>
        <button class="box">Swipe</button>
        <button class="box">Quiz</button>
        <button class="box">Sign Up</button>
        <button class="box">Login</button>
      </main>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/pics-vids/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
