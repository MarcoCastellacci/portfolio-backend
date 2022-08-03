import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Home from './Pages/Home.jsx';
import Details from './Pages/Details';


import './Styles/App.css';


function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/detail' element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
