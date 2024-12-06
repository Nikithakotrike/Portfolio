import "./App.css";
import logo from '/src/images/University Logo.jpeg';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
//import Skills from "./Pages/Skills";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import VideoBlog from "./Pages/VideoBlog";


function App() {
  return (
    <>
      <header className="header ">
      <div className="logo-container">
          <img className="imgLogo" src = {logo} ></img >
          </div>
        <nav className="navbar">
          <nav className="nav comp"></nav>
          <ul className="nav-list">
          <li>
              <Link to="/Portfolio/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
              </li>
              <li>
              <Link to="/VideoBlog">VideoBlog</Link>
              </li>
            <li>
              <Link to="/Contact">Contact</Link>
              </li>
              
            
          </ul>
        </nav>
        <Routes>
        <Route path="/Portfolio" element={<Home/>} />
        <Route path="/About" element={<About/>} />

        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/VideoBlog" element={<VideoBlog/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </header>
        {/* Dynamic copyright year */}
     
    </>
  );
}

export default App;
