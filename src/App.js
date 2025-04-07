import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Courses from './components/Courses';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Sitemap from './components/Sitemap';
import PrivacyPolicy from './components/PrivacyPolicy';
import Register from './components/Register';
import Home from './components/Home';
import Footer from './components/footer';
import NETFramework from './components/.NETFramework';
import Html from './components/Html';
import Java from './components/Java';
import Office from './components/Office';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/.net-framework" element={<NETFramework />} />
          <Route path="/html" element={<Html />} />
          <Route path="/java" element={<Java />} />
          <Route path="/office" element={<Office />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;