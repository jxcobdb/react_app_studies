import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Barman from "./pages/Barman";
import React from "react";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";

function App() {
  return (
    <div className="bg-gradient-to-b from-dark-brown to-light-brown flex-1 w-[100vw] min-h-screen h-auto'">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Barman' element={<Barman />} />
        <Route path='/Form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
