import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Home from './pages/common/home';
import Incomes from './pages/user/incomes'; 
import Expenses from './pages/user/expenses';
import SavingGoals from './pages/user/saving';
import AboutUs from './pages/common/aboutUs';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="header" />
        <div className="main-content">
          <Sidebar className="sidebar" />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/incomes" element={<Incomes />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/savingGoals" element={<SavingGoals />} />
              <Route path="/aboutUs" element={<AboutUs />} />
            </Routes>
          </div>
        </div>
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
