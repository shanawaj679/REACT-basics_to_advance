import "./navbar.css"
import About_section from "../about/about.jsx";
function Navbar_contents(){
return <>
 <div className="navbar_container">
    <div className="navlogo"><p>SN.</p></div>
    <div className="navigation_links"><a href="#about">About</a>
    <a href="#education">Education</a>
    <a href="#skills">Tech Stack</a>
            <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
    </div>
    <div></div>
 </div>
</>
}
export default Navbar_contents;