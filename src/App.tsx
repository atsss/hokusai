import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import "./App.sass";
import { Routes } from './config/Routes';

const App = (props: any) => { // FIXME
  useEffect(() => {
    const rootElement = document.getElementById('root');
    if(rootElement !== null) { document.body.style.height = rootElement.clientHeight + 'px' }
  }, [props.location.pathname])

  return <Routes/>;
}

export default withRouter(App);
