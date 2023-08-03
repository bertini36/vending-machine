import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { VendingMachine } from "./pages/VendingMachine";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
	  <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<Login/>}/>
			  <Route path="/vending-machine" element={<VendingMachine/>}/>
			  <Route path="*" element={<NotFound/>}/>
		  </Routes>
	  </BrowserRouter>
  );
}

export default App;
