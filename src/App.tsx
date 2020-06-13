import React from 'react';
import { Header } from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';




function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route component={About} path="/about" />
        <Route component={Home} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;