import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage"
import HousingPage from "./pages/HousingPage";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
            <Route path="/housing" element={<HousingPage/>}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </BrowserRouter>
  )
}


export default App;
