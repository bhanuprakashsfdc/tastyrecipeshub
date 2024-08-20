import React,{ useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import AppRoutes from './routes/AppRoutes'
import Preloader from './components/Preloader'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <main className="main" id="top">
        {loading ? <Preloader /> : (
          <Router>
            <AppRoutes />
          </Router>
          )}
      </main>
    </div>
  )
}

export default App