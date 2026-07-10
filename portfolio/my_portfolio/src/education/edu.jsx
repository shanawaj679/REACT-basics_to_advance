import "./edu.css"
import {motion} from "framer-motion"

function Education_section(){
    return <>
   <div id="education" className="education_container">
    <div className="education_container_1"></div>
    <div className="education_container_2">
        <div className="education_container_2_1"></div>
        <div className="education_container_2_2">
          <div className="edu_con_2_2_1">
              <motion.div className="education_header"
            initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:0.75}}
             viewport={{once:true,amount:0.3}}>
               Education :
                      </motion.div>
            <motion.div className="engineering_head_line"
            initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:0.8}}
             viewport={{once:true,amount:0.3}}>
                🎓 Bachelor of Engineering (Computer Science & Engineering)
                      </motion.div>
          <motion.div 
            initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:0.85}}
             viewport={{once:true,amount:0.3}}
            className="engineering_college_name">Dr. T. Thimmaiah Institute of Technology
                      </motion.div>
          <motion.div className="engineering_duration"
             initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:0.9}}
             viewport={{once:true,amount:0.3}}
            >2023 – Present 
                       </motion.div>
         
            <div className="engineering_content">
                <ul>
                    <motion.li
            initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:0.95}}
             viewport={{once:true,amount:0.3}}>
                Current CGPA: 8.26 (up to 6th Semester)
                                 </motion.li>
            <motion.li
            initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1}}
             viewport={{once:true,amount:0.3}}>
                Currently pursuing B.E. in Computer Science & Engineering
                                </motion.li>
            <motion.li
            initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.05}}
             viewport={{once:true,amount:0.3}}>
                Focus Areas: Backend Development, Database Systems, Full-Stack Web Development
                                 </motion.li>
                                             </ul>
                                                   </div>
          </div>
          <div className="edu_con_2_2_2">
             <motion.div className="engineering_head_line"
            initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.15}}
             viewport={{once:true,amount:0.3}}>
                🏫 Pre-University Course (Class XII)
                         </motion.div>
             <motion.div 
            initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.2}}
             viewport={{once:true,amount:0.3}}
            className="engineering_college_name">
                Kittel Science College
                          </motion.div>
             <div className="engineering_content">
                <ul>
                    <motion.li
            initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.25}}
             viewport={{once:true,amount:0.3}}>
                    Percentage: 82%
                                </motion.li>
            <motion.li
            initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.3}}
             viewport={{once:true,amount:0.3}}>
                    Science Stream
                                 </motion.li>
                                              </ul>
                                                     </div>
          </div>
          <div className="edu_con_2_2_3">
            <motion.div className="engineering_head_line"
            initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.4}}
             viewport={{once:true,amount:0.3}}>
                🏫 Secondary School (Class X)
                               </motion.div>
            <motion.div 
            initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.45}}
             viewport={{once:true,amount:0.3}}
            className="engineering_college_name">
                S.S. High School
                                 </motion.div>
            <div className="engineering_content">
                <ul>
                    <motion.li
            initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.5}}
             viewport={{once:true,amount:0.3}}>
                    Percentage: 96%
                                </motion.li>
                                             </ul>
                                                    </div>
         </div>
            </div> 
        </div>
    </div>
    </>
}
export default Education_section;








          
           
          

      
           
      
            
           
           
         
  
            
            
           
