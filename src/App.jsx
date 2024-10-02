import React, {useState,useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// !-------------Components----------------
import NavBar from "./Components/NavBar"
// !---------------------------------------

// !-------------Pages----------------
import Home from "./Pages/Home/Home.jsx"
import Courses from "./Pages/Courses/Courses.jsx"
import Practice from "./Pages/Practice/Practice.jsx"
import Usid from "./Pages/Ui/Usid.jsx"

import Quiz from "./Pages/Practice/Quizes/Quiz.jsx"
import Questions from "./Pages/Practice/Questions/Questions.jsx"

import HtmlCss from './Pages/Practice/Quizes/HtmlCss.jsx'
import JavaScript from './Pages/Practice/Quizes/JavaScript.jsx'
import ReactPage from './Pages/Practice/Quizes/ReactPage.jsx' // Corrected here

// !---------------------------------------

import Editer from './Pages/Practice/Questions/Editer.jsx'

// !---------------------------------------

import Buy from './Components/Buy/Buy.jsx'


export default function App() {

  //------------------------States--------------------------


      
//Qustion from Qustion page:--------------

let [SelectQuestion, setSelectQuestion] = useState("Select a Question")






  	

  return (
    <>

      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Courses/*" element={<Courses />} />
          <Route path="/Practice" element={<Practice />} />
          <Route path='/Usid' element={<Usid/>}/>

          <Route path="/Practice/Questions" element={<Questions setSelectQuestion = {setSelectQuestion}  />} />
          <Route path="/Practice/Quiz" element={<Quiz />} />

          <Route path="/Practice/Quiz/HtmlCss" element={<HtmlCss />} />
          <Route path="/Practice/Quiz/JavaScript" element={<JavaScript />} />
          <Route path="/Practice/Quiz/React" element={<ReactPage />} />

          <Route path="/Editer" element={<Editer SelectQuestion = {SelectQuestion}  />} />

          <Route path="/Buy" element={<Buy/>}/>

        </Routes>

      </BrowserRouter>

    </>
  )
}
