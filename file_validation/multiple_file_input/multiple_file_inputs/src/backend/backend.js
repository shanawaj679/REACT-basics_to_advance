import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const upload = multer();

app.post("/file_inputs", upload.array("multiplepictures"), (req, res) => {
  console.log(req.files);

  return res.status(200).json(req.files);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});