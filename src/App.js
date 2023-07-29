import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { Route, Routes } from "react-router-dom";

const App =() =>{



  return(
    <div>
      <Routes>
        <Route path = "/" element = {<Login />} />
        <Route path = "/profile" element = {<Profile />} />
      </Routes>
      
    </div>
  )
}
export default App;



