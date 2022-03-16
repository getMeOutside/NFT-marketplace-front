import Header from './components/header';
import Footer from './components/Footer';
import Home from './pages/Home';
// import {
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";
// import routes from './helpers/routes';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Routes>
          <Route path="/">
            <Home />
          </Route>
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
