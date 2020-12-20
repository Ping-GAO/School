import React from 'react';
import {
    BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PlaceHolder from './pages/PlaceHolder';
import SearchAppBar from './components/SearchAppBar';

function App() {
    return (
        <div className="App">
            <Router>
                <SearchAppBar />
                <Switch>
                    <Route exact path="/placeholder">
                        <PlaceHolder />
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Redirect exact from="/" to="dashboard" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
