import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, { lazy, Suspense, useEffect } from 'react';

// const Header = lazy(() => import('./Containers/Header'))
// const ProductListing = lazy(() => import('./Containers/ProductListing'))
// const ProductDetails = lazy(() => import('./Containers/ProductDetails'))
// const ProductComponent = lazy(() => import('./Containers/ProductComponent'))
import Header from './Containers/Header'
import ProductDetails from './Containers/ProductDetails'
import ProductListing from './Containers/ProductListing'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Switch>
          <Route path='/' exact component={ProductListing} />
          <Route path='/product/:productId' exact component={ProductDetails} />
          <Route>404 Not Found</Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
