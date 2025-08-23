import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UnicornScene from "unicornstudio-react";
import DragNdrop from './components/DragNdrop';
import TextInput from './components/TextInput';
function App() {

  return (
    <>
      <div className='App'>
      <div className='unicorn'><UnicornScene projectId="jQIQhaKLsJjU8cH6PMGw" width={100+"vw"} height={100+"vh"} /></div>
      <DragNdrop/>
      <div className='flex flex-row space-x-4 items-center justify-center'>
        <TextInput/>
        <div className='buttonContainer'>
          <div className='downloadButton'><button>Download</button></div>
        </div></div>
      </div>
    </>
  )
}

export default App
