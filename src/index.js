import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header'

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
      </Routes>
      {/* </LinearGradientBasics> */}
    </Router>
  </React.StrictMode>
);