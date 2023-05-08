import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage.jsx'
import Project from './pages/ProjectPage'
import AllBugs from './pages/AllBugsPage'
import AllProjects from './pages/AllProjectsPage'

const Routepaths = () => {
  return(
  <Routes>
    <Route path='/bugs' element={<AllBugs />} />
    <Route path='/projects' element={<AllProjects/>} />
    <Route path='/projects/:id' element={<Project />} />
    <Route exact path='/' element={<HomePage/>}/>
    <Route path='*' element={<Navigate to="/"/>} />
  </Routes>
  );
}

export default Routepaths
