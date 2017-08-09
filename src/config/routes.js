import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import App from '../App'
import Form from '../Form.js'

class Routes extends Component{
    render() {
        return(
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <Route path="/signup" component={Form}/>
                    </Route>
                </Router>
            );
        }
};

export default Routes;