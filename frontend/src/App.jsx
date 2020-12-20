import React from 'react';
import {
    BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PlaceHolder from './pages/PlaceHolder';
import SearchAppBar from './components/SearchAppBar';
import LianZhengJianShe from './pages/ccp-achievement/LianZhengJianShe';
import QunTuanHuoDong from './pages/ccp-achievement/QunTuanHuoDong';
import DangJianLianJian from './pages/ccp-achievement/DangJianLianJian';

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
                    <Route exact path="/ccp-achievement/LianZhengJianShe">
                        <LianZhengJianShe />
                    </Route>

                    <Route exact path="/ccp-achievement/QunTuanHuoDong">
                        <QunTuanHuoDong />
                    </Route>

                    <Route exact path="/ccp-achievement/DangJianLianJian">
                        <DangJianLianJian />
                    </Route>

                    <Redirect exact from="/" to="dashboard" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
