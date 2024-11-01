import "./App.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact"

function App() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <nav className="nav comp"></nav>
          <div className="logo-container"></div>

          <ul className="nav-list">
          <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Skills">Skills</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
              </li>
            <li>
              <Link to="/Contact">Contact</Link>
              </li>
              
            
          </ul>
        </nav>
        <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </header>
        {/* Dynamic copyright year */}
     
    </>
  );
}

export default App;
