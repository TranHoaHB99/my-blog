import React,{Suspense} from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'; 
import Spinner from './components/Spinner/Spinner'
import Header from './components/Header/Header'
import NotFound from './components/NotFound/NotFound'
import ErrorBoundary from './ErrorBoundary'
function App() {
  return (
    <div>
     <Suspense fallback={<Spinner/>}>
        <BrowserRouter>
          <ErrorBoundary>
            <Header />
            <Switch>
              <Redirect exact from='/' to='/' />
              {/* <Route path='/posts' component={Post} />
              <Route path='/login' component={Login} /> */}
              <Route component={NotFound} />
            </Switch>
          </ErrorBoundary>
        </BrowserRouter>
      </Suspense>
      
    </div>
  );
}

export default App;
