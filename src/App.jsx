import React from "react";
import { Helmet } from "react-helmet";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// Screens
import Landing from "./screens/Landing.jsx";
import Login from "./screens/Login.jsx";

export default function App() {
  return (
    <>
      <Router>


        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
        </Helmet>
        <Routes>
          <Route path='/login' element={<><Login /></>} />
        </Routes>
        <Routes>
          <Route path='/' element={<><Landing /></>} />
        </Routes>

      </Router>

    </>
  );
}
