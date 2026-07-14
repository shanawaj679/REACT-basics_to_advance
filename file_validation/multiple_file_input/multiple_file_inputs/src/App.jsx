import { useRef, useState } from "react";

function App() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileRef = useRef(null);

  async function upload_file() {
    try {
      const files = fileRef.current.files;

      if (files.length === 0) {
        console.log("Please select files");
        return;
      }

      const formData = new FormData();

      for (let file of files) {
        formData.append("multiplepictures", file);
      }

      const response = await fetch("http://localhost:3000/file_inputs", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setUploadedFiles(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <input type="file" multiple ref={fileRef} />

      <button onClick={upload_file}>
        Upload
      </button>

      <pre>{JSON.stringify(uploadedFiles)}</pre>
    </>
  );
}

export default App;