import express from "express"
const app=express()
import cors from "cors"
app.use(cors({
    origin:"http://localhost:5173",
}))
import multer from "multer"
const upload = multer()

app.post("/upload_profile",upload.single("profile"),async (req,res)=>{
//  console.log(req.file);
const Result = req.file
 return res.json(Result)
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})