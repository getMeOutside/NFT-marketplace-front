import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import {
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  const [isHomePage, setIsHomePage] = useState(true);
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Routes>
          <Route path="/">
            <Home />
          </Route>
      </Routes> */}
      {isHomePage && <Footer />}
    </div>
  );
}

export default App;
