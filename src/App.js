import React, {Suspense} from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Spinner from './components/Spinner/Spinner'
import NotFound from './components/NotFound/NotFound'
import ErrorBoundary from './ErrorBoundary'
import Homepage from "./features/home/Homepage";

function App() {
    return (
        <div>
            <Suspense fallback={<Spinner/>}>
                <BrowserRouter>
                    <ErrorBoundary>
                        <Switch>
                            <Route path='/' exact component={Homepage}/>
                            {/*<Route path='/login' component={Login} /> */}
                            <Route component={NotFound}/>
                        </Switch>
                    </ErrorBoundary>
                </BrowserRouter>
            </Suspense>

        </div>
    );
}

export default App;
