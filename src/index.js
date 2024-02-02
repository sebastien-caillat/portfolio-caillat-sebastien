import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Realisation from './pages/Realisations';
import Header from './components/Header'
import Footer from './components/Footer'

import GlobalStyle from './utils/style/GlobalStyle';
// import LinearGradientBasics from './utils/style/gradient';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      {/* <LinearGradientBasics> */}
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='realisations' element={<Realisation />}></Route>
      </Routes>
      {/* </LinearGradientBasics> */}
      <Footer />
    </Router>
  </React.StrictMode>
);