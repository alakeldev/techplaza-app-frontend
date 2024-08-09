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
import Dashboard from './pages/dashboards/Dashboard';
import ResetPassword from './pages/auth/ResetPassword';
import WeatherApp from './pages/weatherapp/WeatherApp';
import TasksApp from './pages/tasksapp/TasksApp';
import SnakeGame from './pages/snakegame/SnakeGame';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Fragment>
      <Router>
        <ToastContainer />
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
          <Route path="/password_reset_confirm/:uid/:token" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/weather_app" element={<WeatherApp />} />
          <Route path="/dashboard/tasks_app" element={<TasksApp />} />
          <Route path="/dashboard/snake_game" element={<SnakeGame />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
