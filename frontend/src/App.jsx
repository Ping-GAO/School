import React from 'react';
import {
    BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PlaceHolder from './pages/PlaceHolder';
import SearchAppBar from './components/SearchAppBar';
import LianZhengJianShe from './pages/DangJianTianDi/LianZhengJianShe';
import QunTuanHuoDong from './pages/DangJianTianDi/QunTuanHuoDong';
import DangJianLianJian from './pages/DangJianTianDi/DangJianLianJian';
import DangJianTianDi from './pages/DangJianTianDi';

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
                    <Route exact path="/DangJianTianDi">
                        <DangJianTianDi />
                    </Route>
                    <Route exact path="/DangJianTianDi/LianZhengJianShe">
                        <LianZhengJianShe />
                    </Route>

                    <Route exact path="/DangJianTianDi/QunTuanHuoDong">
                        <QunTuanHuoDong />
                    </Route>

                    <Route exact path="/DangJianTianDi/DangJianLianJian">
                        <DangJianLianJian />
                    </Route>

                    <Redirect exact from="/" to="dashboard" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
