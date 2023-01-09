import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {BrowserRouter as Router} from "react-router-dom"

import { hydrate, render } from "react-dom";
 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
         <Router>
          <App />
         </Router>
      </React.StrictMode>,
      rootElement
      );
} else {
  render(
  <React.StrictMode>
    <Router>
     <App />
    </Router>
 </React.StrictMode>,
 rootElement
  );
}



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />)
