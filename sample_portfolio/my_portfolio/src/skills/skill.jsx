import "./skill.css"
import {motion} from "framer-motion"

function Skills_section(){
    return <>
   <div id="skills" className="skills_container">
    <div className="skills_container_1"></div>
    <div className="skills_container_2">
        <div></div>
        <div>
             <motion.div className="skills_header"
        initial={{opacity:0,scale:0.9}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.8}}
        viewport={{once:true,amount:0.3}}>Tech Stack : </motion.div>
              <motion.div className="skills_main_heading"
        initial={{opacity:0,scale:0.9}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.8}}
        viewport={{once:true,amount:0.3}}>Frontend</motion.div>
        <motion.div className="skills_content"
        initial={{opacity:0,scale:0.9}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.85}}
        viewport={{once:true,amount:0.3}}>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript (ES6+) </li>
                <li>React.js</li>
            </ul></motion.div>
<motion.div className="skills_main_heading"
initial={{opacity:0,scale:0.9}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.9}}
        viewport={{once:true,amount:0.3}}>Backend</motion.div>
<motion.div className="skills_content"
initial={{opacity:0,scale:0.9}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.95}}
        viewport={{once:true,amount:0.3}}>
            <ul>
                <li>Node.js</li>
                <li>Express.js </li>
                <li>REST APIs</li>
                <li>JWT Authentication</li>
            </ul>
                </motion.div>
<motion.div className="skills_main_heading"
initial={{opacity:0,scale:0.9}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1.00}}
        viewport={{once:true,amount:0.3}}>Database</motion.div>
<motion.div className="skills_content"
initial={{opacity:0,scale:0.9}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1.05}}
        viewport={{once:true,amount:0.3}}>
            <ul><li>MySQL</li></ul>
             </motion.div>
<motion.div className="skills_main_heading"
initial={{opacity:0,scale:0.9}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1.1}}
        viewport={{once:true,amount:0.3}}> Tools</motion.div>
<motion.div className="skills_content"
initial={{opacity:0,scale:0.9}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1.15}}
        viewport={{once:true,amount:0.3}}>
            <ul>
                <li>Git</li>
                <li>GitHub </li>
                <li>VS Code</li>
            </ul>
                   </motion.div>
        </div>
      
    </div>
   </div>
    </>
}
export default Skills_section