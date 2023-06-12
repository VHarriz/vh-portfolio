import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/aboutme" element={<About />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
        </Routes>
        <Footer />
      </Router>
      </div>
  );
}

export default App;
