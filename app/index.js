import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom'
import Nav from './nav'
import Jspang from './jspang';
import Jspangb from './jspangb';
import Jspangc from './jspangc';
import Error from './404';

// ReactDOM.render(<Jspang/>, document.getElementById('app'))

ReactDOM.render(
    <Router>
        <div>
            <Nav/>
            <Switch>
                <Route  exact path="/" component={Jspang}/>
                <Route  path="/Jspangb" component={Jspangb}/>
                <Route  path="/Jspangc" component={Jspangc}/>
                <Redirect from="/redirect" to="/Jspangc" />
                <Route  component={Error}/>
            </Switch>
        </div>
    </Router>
    , document.getElementById('app'))