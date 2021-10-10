import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from '../redux/actions/items';

import './app.css';
import Footer from './Footer/Footer';
import Home from './Home/Home';

function App() {

  return (
    <div className="app">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
