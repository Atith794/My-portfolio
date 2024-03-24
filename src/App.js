import React from "react";
import Navbar from "./Components/Navbar.js";
import Aboutme from "./Components/Aboutme.js";
import Projects from "./Components/Projects.js";
import Contact from "./Components/Footer.js";
import Hero from "./Components/Herosection.js";


const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Aboutme />
            <Projects />
            <Contact />
        </div>
    )
}

export default App;