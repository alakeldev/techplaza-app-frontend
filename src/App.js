import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.module.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import LoginForm from './pages/auth/LoginForm';
import RegisterForm from './pages/auth/RegisterForm';
import EmailVerify from './pages/auth/EmailVerify';
import ForgetPasswordForm from './pages/auth/ForgetPasswordForm';
import Profile from './pages/profiles/Profile';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/otp/verify" element={<EmailVerify />} />
          <Route path="/forget_password" element={<ForgetPasswordForm />} />
          <Route path="/dashboard" element={<Profile />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
