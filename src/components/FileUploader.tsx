import axios from 'axios';
import React, { ChangeEvent, useState } from 'react'

const FileUploader = () => {
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<UploadStatus>("idle");

    type UploadStatus = "idle" | "uploading" | "success" | "error";

    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    }

    async function handleFileUpload() {
        if (!file) return;

        setStatus("uploading");

        const formData = new FormData();
        formData.append("file", file);

        try {
            await axios.post("https://httpbin.org/post", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            setStatus("success");
        } catch {
            setStatus("error");
        }

    }

    return (
        <>
            <input type="file" onChange={handleFileChange}/>

            {file && (
                    <div>
                        <p>Name: {file.name}</p>
                        <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
                        <p>Type: {file.type}</p>
                    </div>
            )}

            {file && status !== "uploading" && (
                <button onClick={handleFileUpload}>
                    Upload
                </button>
            )}

            {status === 'success' && (
                <p>
                    File uploaded successfully
                </p>
            )}

            {status === 'error' && (
                <p>
                    Upload failed. Try again.
                </p>
            )}
        </>
    )
}

export default FileUploader