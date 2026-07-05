import "./main_page.css"
import { FaBars,FaTimes } from "react-icons/fa";
import {FaSun,FaMoon} from "react-icons/fa";
import { useState } from "react";
function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
  
return (
     <>
     <header className="header">
     <div className="navbar_container">
  <nav className="navbar">
                <div><h3>SN.</h3></div>
            <div className="nav_links">
             <a href="#about">About</a>
             <a href="#skills">Skills</a>
             <a href="#projects">Projects</a>
             <a href="#journey">Journey</a>
             <a href="#contact">Contact</a>
             <a href="#resume">Resume</a>
            </div>
            <FaMoon />
            <FaSun />
            </nav>
         {menuOpen ? (
    <FaTimes
        className="hamburger"
        onClick={() => setMenuOpen(false)}
    />
) : (
    <FaBars
        className="hamburger"
        onClick={() => setMenuOpen(true)}
    />
)}
 {
    menuOpen && (
        <div className="mobile_menu"> 
             <a href="#about">About</a>
             <a href="#skills">Skills</a>
             <a href="#projects">Projects</a>
             <a href="#journey">Journey</a>
             <a href="#contact">Contact</a>
             <a href="#resume">Resume</a>
            </div>
    )
}
             
     </div>
        <div className="hero-container">  <section className="hero"> <p className="hi">👋 Hi, I'm</p> <p className="name">Shanawaj Nadaf</p>
             </section></div>
      <div id="about" className="about-container">
    <section className="about"><span className="about_span_first"> I’m a Computer Science Engineering student with a strong interest in building reliable software and understanding how complete applications work.  </span>
    <span className="about_span_second"> While I’m currently learning React and modern frontend development, my primary focus is backend engineering and designing systems that are clean, scalable, and maintainable.</span>
    <div>
            <span className="about_span_third">I enjoy learning by building real projects rather than simply following tutorials, because I believe practical experience is the best way to grow as a developer. My goal is to continuously improve my problem-solving skills, contribute to meaningful software, and build applications that are both functional and thoughtfully designed.</span> 
    </div>
</section>
      </div>
     </header>
    
    </>
    



)
}
export default Navbar