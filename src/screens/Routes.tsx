import React from 'react';

import {
  Switch,
  Route,
} from "react-router-dom";

const AsyncHome = React.lazy(()=> import('./Home'))

export default function App() {
  return (
  <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={AsyncHome}/>
          <Route>
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
        </React.Suspense>
  );
}