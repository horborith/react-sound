import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Screen from './screens'

export default function App() {
  return (
    <Router>
        <Route path="/" component={Screen}/>
    </Router>
  );
}
