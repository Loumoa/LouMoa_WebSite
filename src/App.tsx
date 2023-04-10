import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage"
import HousingPage from "./pages/HousingPage";
import HousingManagementPage from './pages/HousingManagementPage/HousingManagementPage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/housing/:id" element={<HousingPage/>}/>
          <Route path="/housing" element={<HousingPage/>}/>
          <Route path="/housingManagementPage" element={<HousingManagementPage/>}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </BrowserRouter>
  )
}


export default App;
