import React, { ChangeEvent, useState } from 'react'

const FileUploader = () => {
    const [file, setFile] = useState<File | null>(null);

    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {

    }

    return (
        <>
            <input type="file" onChange={handleFileChange}/>
        </>
    )
}

export default FileUploader