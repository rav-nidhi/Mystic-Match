import vid from "./pics-vids/gate-vid.mp4"
import "./style.css"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Swipe from "./components/Swipe";

function App() {
    return (
        <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>

            <div className="HomePage">
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
    <h1>Mystic Match</h1>
    <h2>ENCHANTED TO MEET YOU</h2>

    <main>
        <button class="box" onClick={(e) => {e.preventDefault(); window.location.href='./Home';}}> Home</button>
        <button class="box" onClick={(e) => {e.preventDefault(); window.location.href='./Quiz';}}> Quiz</button>
        <button class="box" onClick={(e) => {e.preventDefault(); window.location.href='./Swipe';}}> Swipe</button>
    </main>
  </div>
                <Routes>
                    <Route
                        exactpath="/"element={<Home />}/>
                    <Route
                        path="/quiz" element={<Quiz />}/>
                    <Route
                        path="/swipe" element={<Swipe />}/>
                    <Route
                        path="*"
                        element={<Navigate to="/" />}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;