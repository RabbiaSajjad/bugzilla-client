import './App.css';

import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routepaths from './Routepaths.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routepaths/>
      </BrowserRouter>
    </div>
  );
}

export default App;
