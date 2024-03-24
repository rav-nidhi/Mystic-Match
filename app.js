import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        poster="https://assets.codepen.io/6093409/river.jpg"
      >
        <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>
      <h1>ENCHANTED TO MEET YOU</h1>
      <main>
        <button class="box">Swipe</button>
        <button class="box">Quiz</button>
        <button class="box">SignUp</button>
        <button class="box">Login</button>
      </main>
    </div>
  );
}
