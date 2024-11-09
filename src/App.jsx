import React from 'react'
import NavBar from './components/navbar/NavBar'
import Task from "./tasks/Task"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ShowTask from './showTask/ShowTask'

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element = {<ShowTask />}/>
          <Route path='/add-notes' element = {<Task />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
