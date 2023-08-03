import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login";
import {VendingMachine} from "./pages/VendingMachine";

function App() {
  return (
	  <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<Login/>}/>
			  <Route path="/vending-machine" element={<VendingMachine/>}/>
		  </Routes>
	  </BrowserRouter>
  );
}

export default App;
