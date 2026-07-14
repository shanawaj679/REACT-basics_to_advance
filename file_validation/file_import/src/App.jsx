import { useRef, useState } from "react";

function App() {
    const [UseState, setUseState] = useState("");
    const fileRef = useRef(null);

    async function uploadFile() {
        try {
            const file = fileRef.current.files[0];

            if (!file) {
                alert("Please select a file");
                return;
            }

            const formData = new FormData();
            formData.append("profile", file);

            const response = await fetch("http://localhost:3000/upload_profile", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            setUseState(data);

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <input type="file" ref={fileRef} />

            <button onClick={uploadFile}>
                Upload
            </button>

            <div>{JSON.stringify(UseState)}</div>
        </>
    );
}

export default App;