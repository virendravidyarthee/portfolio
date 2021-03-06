import React, { Component } from 'react';
import './App.css';
import Home from "./containers/Home/Home";
import MyWork from "./containers/MyWork/MyWork"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Project from "./containers/Project/Project";
import AboutMe from "./containers/AboutMe/AboutMe";
import Sidebar from "./components/Sidebar/Sidebar";
import ContactMe from "./containers/ContactMe/ContactMe";
import NotFound from './containers/NotFound/NotFound';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="Sidebar">
                        <Route path='/' component={Sidebar} />
                    </div>
                    <div className="Content">
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/my-work' exact component={MyWork} />
                            <Route path='/project/:id' exact component={Project} />
                            <Route path='/about-me' exact component={AboutMe} />
                            <Route path='/contact-me' exact component={ContactMe} />
                            <Route path="/404" exact component={NotFound} />
                            <Redirect to="/404" />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
