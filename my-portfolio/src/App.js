import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import tecnoActions from './Redux/Actions/tecnoActions';

import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Home from './Pages/Home.jsx';
import KnolegePage from './Pages/KnolegePage';
import Contact from './Pages/Contact';
import Proyects from './Pages/Proyects';



import './Styles/App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tecnoActions.getTecno())
    // console.log(res)
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/proyects' element={<Proyects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/home' element={<Home />} />
          <Route path='/knoleges' element={<KnolegePage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
