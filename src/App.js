import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./Component/Start";
import Quizes from "./Component/Quizes";
import FinalScore from "./Component/FinalScore";

function App() {
  // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
    // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
   // Hurray
  return (
    <Router>
    
        <Routes>
        <Route exact path='/' 
        element = {
            <>
               <Start />
            </>
        }>
      
            </Route>
            <Route path='/quizes' element={
           <Quizes />
            } exact
            />

          <Route path='/finalScore/:ans' element={
           <FinalScore />
            } exact
            />
            </Routes>

        </Router>
  )
}

export default App;
