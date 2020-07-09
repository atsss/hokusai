import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import "./App.sass";
import { Routes } from './config/Routes';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const rootElement = document.getElementById('root');
    if(rootElement !== null) { document.body.style.height = rootElement.clientHeight + 'px' }
  }, [pathname])

  return <Routes/>;
}

export default App;
