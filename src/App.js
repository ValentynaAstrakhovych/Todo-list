import React, { createContext, useState } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from  "./pages/Main/MainPage"
import NoPage from "./pages/NoPages/NoPage";



export default function App() {

  
  return (
    <div className="relative h-screen">
      <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}


