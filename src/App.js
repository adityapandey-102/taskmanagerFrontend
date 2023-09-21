import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import NoteState from "./context/notes/NoteState";
import { useState } from "react";
import Notes from "./components/Notes";
import toast, { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <NoteState>
        <Router>
          <Navbar/>
          <Toaster/>
          <div >
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/notes" element={<Notes/>} />
          </Routes>
          </div>
        </Router>
        
        </NoteState>
      
    </>
  );
}

export default App;
