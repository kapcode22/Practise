import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header"; 
import Home from './pages/Home'
import Enroll from './pages/Enroll'
import Recorder from './pages/Record_Trial_Data'
import Visits from './pages/Schedule_visit'
import Progress from './pages/Trial_progress'
import Dashboard from './pages/Dashboard'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App=()=> {
  // logic 

  return (
    <>
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/enroll" element={<Enroll/>}/>
      <Route path="/visits" element={<Visits/>}/>
      <Route path="/recorder" element={<Recorder/>}/>
      <Route path="/progress" element={<Progress/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
