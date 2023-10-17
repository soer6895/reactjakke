import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import { AuthProvider } from "./AuthContext";
import React from 'react';
import Header from './header';
import PhoneNumber from "./fontpage"
import NfcCon from "./nfcCon"
import Staff from "./staff"
import About from "./about"
import PrivateRoute from "./PrivateRoute"
import LoginPage from "./LoginPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="about" element={<About />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<PhoneNumber />} />
            <Route path="nfcCon" element={<NfcCon />} />
            <Route path="staff" element={<Staff />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}


export default App;
