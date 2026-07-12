import "./about.css"
import {easeOut, motion} from "framer-motion"
import Card from "../cards/cards.jsx";
function About_section(){
return <>
<motion.div id="about" className="about_container" >
<div></div>
<div className="about_section">
   <div></div>
   <div>
   <motion.div className="about_me" 
    initial={{opacity:0,scale:0.9}}
    whileInView={{opacity:1,scale:1}}
    transition={{duration:0.6}}
    viewport={{once:true,amount:0.3}}
    ><p>About Me:</p></motion.div>
    <div className="about_content">
<motion.div 
initial={{opacity:0,scale:0.9}}
whileInView={{opacity:1,scale:1}}
transition={{duration:0.65}}
viewport={{once:true,amount:0.3}}
>Building software isn't just about writing code.</motion.div>
<motion.div 
initial={{opacity:0,scale:0.9}}
whileInView={{opacity:1,scale:1}}
transition={{duration:0.7}}
viewport={{once:true,amount:0.3}}
>For me, it's about understanding problems,
designing reliable solutions, and continuously
improving through every project I build.</motion.div>
<motion.div 
initial={{opacity:0,scale:0.9}}
whileInView={{opacity:1,scale:1}}
transition={{duration:0.75}}
viewport={{once:true,amount:0.3}}
>I'm focused on backend development because I
enjoy creating the systems that power modern
applications behind the scenes. At the same time,
I'm developing frontend skills to better understand
how complete web applications come together.</motion.div>
<motion.div
initial={{opacity:0,scale:0.9}}
whileInView={{opacity:1,scale:1}}
transition={{duration:0.8}}
viewport={{amount:0.3,once:true}}
>I believe that consistent learning, attention to
detail, and practical experience are the foundation
of becoming a software engineer who creates
meaningful products.</motion.div>
</div>
<div className="about_cards">
  <motion.div  
     initial={{opacity:0,scale:0.9}}
     whileInView={{opacity:1,scale:1}}
     transition={{duration:0.85}}
     viewport={{amount:0.3,once:true}}
  ><Card title="Backend Development" /></motion.div> 
  <motion.div 
  initial={{opacity:0,scale:0.9}}
     whileInView={{opacity:1,scale:1}}
     transition={{duration:0.85}}
     viewport={{amount:0.3,once:true}}
  ><Card title="Database Design" /></motion.div>
    <motion.div 
     initial={{opacity:0,scale:0.9}}
     whileInView={{opacity:1,scale:1}}
     transition={{duration:0.85}}
     viewport={{amount:0.3,once:true}}
    ><Card title="Full-Stack Learning" /></motion.div> 
    <motion.div 
     initial={{opacity:0,scale:0.9}}
     whileInView={{opacity:1,scale:1}}
     transition={{duration:0.85}}
     viewport={{amount:0.3,once:true}}
    > <Card title=" Problem Solving" /></motion.div> 
      <motion.div 
      initial={{opacity:0,scale:0.9}}
     whileInView={{opacity:1,scale:1}}
     transition={{duration:0.85}}
     viewport={{amount:0.3,once:true}}
      ><Card title="Continuous Learning" /></motion.div> 
      <motion.div 
         initial={{opacity:0,scale:0.9}}
     whileInView={{opacity:1,scale:1}}
     transition={{duration:0.85}}
     viewport={{amount:0.3,once:true}}
      > <Card title=" Software Engineering" /></motion.div> 
</div>
</div>
   </div>
   
</motion.div>
</>
}
export default About_section;
