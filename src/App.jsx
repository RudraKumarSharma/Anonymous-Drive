import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UnicornScene from "unicornstudio-react";

function App() {

  return (
    <>
      <div className='App'>
      <div className='unicorn'><UnicornScene projectId="jQIQhaKLsJjU8cH6PMGw" width={100+"vw"} height={100+"vh"} /></div>
        <div className='buttonContainer'>
          <div className='uploadButton'><button>Upload</button></div>
          <div className='downloadButton'><button>Download</button></div>
        </div>
      </div>
    </>
  )
}

export default App
