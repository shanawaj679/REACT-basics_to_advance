import "./hero.css"
import Navbar_contents from "../navbar/navbar.jsx";
import {FaGithub,FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md"

function Hero_section(){
return <>
       <section id="contact">
        <div className="navbar"><Navbar_contents /></div>
        <div className="hero_container">
            <div></div>

            <div className="grid_column_second">
               <div> <div><h1 className="hero_name_hi">👋 Hi, I'm</h1>    <h1 className="hero_name">Shanawaj Nadaf</h1>    </div>
                <div className="hero_about_container"><p className="hero_about"><span>Learning, building, and growing</span> as a <span className="hero_about_backend"> backend developer</span><span> with a passion for creating impactful web solutions.</span></p></div>
                </div>
                <div className="falinkers">
                    <a href="https://github.com/shanawaj679"> <FaGithub className="fagithub" /></a>
                     <a href="https://www.linkedin.com/in/shanawaj-nadaf-31b4a032b/"><FaLinkedin className="falinkdin" /> </a>
                    <a href="mailto:shanawaznadaf85@gmail.com"> <MdEmail className="mdmail" /> </a>
                </div>
            </div>
            

        </div>
       </section>
     
</>
}


export default Hero_section;