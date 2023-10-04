import React from "react";
import { Helmet } from "react-helmet";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
// Screens
import Landing from "./screens/Landing.jsx";
import Login from "./screens/Login.jsx";
import Home from "./screens/Home/Home.jsx";
import SurveyForm from "./screens/employeeForms/SurveyForm";
import { ChakraProvider } from "@chakra-ui/react";
import SurveyCreationTool from "./screens/forms/SurveyCreationTool";
import ContactEmpForm from "./screens/employeeFeedback/EmpForm";
import { UserContext } from "./context/UserContext";

export default function App() {
  return (
    <>
    <ChakraProvider>
      <Router>


        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
        </Helmet>
        <UserContext>
        <Routes>
          <Route path='/login' element={<><Login /></>} />
        </Routes>
        <Routes>
          <Route path='/' element={<><Landing /></>} />
          <Route path='/survey-form' element={<SurveyCreationTool/>} />
        </Routes>
        <Routes>
          <Route path='/home' element={<><Home /></>} />
          <Route path='/survey' element={<><SurveyForm /></>} />
        </Routes>
        <Routes>
          <Route path='/empForm' element={<><ContactEmpForm /></>} />
        </Routes>
        </UserContext>
      </Router>
      </ChakraProvider>
    </>
  );
}

