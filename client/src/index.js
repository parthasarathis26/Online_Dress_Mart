// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import Contact from './components/Contact';
import AdminLogin from './components/AdminLogin';
import AdminHome from './components/AdminHome';
import AdminNavbar from './components/AdminNavbar';
import ProtectedRoute from './components/ProtectedRoute';
import AdminAdd from './components/AdminAdd';
import './styles/Auth.css';
import './styles/Navbar.css';
import './styles/Home.css';
import './styles/Card.css';
import './styles/AdminHome.css'

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/adminnavvber" element={<AdminNavbar />}/>
        <Route path="/adminlogin" element={<AdminLogin />}/>
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/adminadd" element={<AdminAdd/>}/>
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
