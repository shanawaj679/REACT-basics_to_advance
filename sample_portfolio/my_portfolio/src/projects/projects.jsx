import "./projects.css"
import {motion} from "framer-motion"
function Projects_section(){
    return <>
     <div id="projects" className="project_container">
        <div className="project_container_1"></div>
        <div className="project_container_2">
            <div className="project_container_2_1"></div>
            <div>
                 <motion.div className="project_header"
             initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:0.8}}
             viewport={{once:true,amount:0.3}}
             >Projects :</motion.div>
             <motion.div  initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:0.85}}
             viewport={{once:true,amount:0.3}} className="project_content_header">1. User Management System </motion.div>
           <motion.div initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:0.9}}
             viewport={{once:true,amount:0.3}} className="project_content">A full-stack user management application with complete <span className="project_content_heighlight">CRUD</span> operations. Users can be created, updated, viewed, and deleted through a <span>RESTful  API </span>connected to a <span>MySQL</span> database.</motion.div>
             <motion.div initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:0.95}}
             viewport={{once:true,amount:0.3}} className="projet_tech">Tech:</motion.div>
             <motion.div initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1}}
             viewport={{once:true,amount:0.3}} className="project_tech_content"> <ul>
                <li>REST API</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                </ul></motion.div>
            <motion.div  initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.05}}
             viewport={{once:true,amount:0.3}} className="project_content_header">2. JWT Authentication System </motion.div>
           <motion.div initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.1}}
             viewport={{once:true,amount:0.3}} className="project_content">A secure authentication system implementing user registration, login, password hashing with bcrypt, JWT-based authentication, protected routes, and middleware-based authorization.</motion.div>
             <motion.div initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.15}}
             viewport={{once:true,amount:0.3}} className="projet_tech">Tech:</motion.div>
             <motion.div initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.2}}
             viewport={{once:true,amount:0.3}} className="project_tech_content"><ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>JWT</li>
                <li>bcrypt</li>
                <li>MySQL</li>
                </ul></motion.div>
                 <motion.div  initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.25}}
             viewport={{once:true,amount:0.3}} className="project_content_header">3.  Backend API Server</motion.div>
           <motion.div initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.3}}
             viewport={{once:true,amount:0.3}} className="project_content">Developed a backend application using Node.js and Express.js to understand RESTful API architecture and server-side development. Implemented routing, middleware, request handling, and structured API endpoints while following modular project organization.</motion.div>
             <motion.div initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.35}}
             viewport={{once:true,amount:0.3}} className="projet_tech">Tech:</motion.div>
             <motion.div initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.4}}
             viewport={{once:true,amount:0.3}} className="project_tech_content"><ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>JWT</li>
                <li>MySQL</li>
                </ul></motion.div>
                   <motion.div  initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.45}}
             viewport={{once:true,amount:0.3}} className="project_content_header">4. MySQL Integration with Express</motion.div>
           <motion.div initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.5}}
             viewport={{once:true,amount:0.3}} className="project_content">Built a backend application that connects Express.js with MySQL to perform database operations. Implemented SQL queries, database connectivity, and API endpoints to retrieve and manage data efficiently.</motion.div>
             <motion.div initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.55}}
             viewport={{once:true,amount:0.3}} className="projet_tech">Tech:</motion.div>
             <motion.div initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:1.6}}
             viewport={{once:true,amount:0.3}} className="project_tech_content"><ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>JWT</li>
                <li>MySQL</li>
                </ul></motion.div>
            </div>         
        </div>
     </div>
    </>
}
export default Projects_section