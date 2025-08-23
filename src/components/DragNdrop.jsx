import React from 'react'
import { useDropzone } from 'react-dropzone'

function DragNdrop() {
  const {getRootProps, getInputProps, isDragActive} = useDropzone({});
    return (
        <div className='border-2 border-dashed rounded-2xl p-4 w-3xl h-30 mt-4 flex items-center justify-center text-gray-600' {...getRootProps()}>
            <input {...getInputProps()} /> {
            isDragActive ?
            <p>Drop the files here ...</p> :
            <p>--Upload--</p>
            }
            
        </div>
    )
}

export default DragNdrop