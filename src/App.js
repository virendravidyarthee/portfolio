import React, { Component } from 'react';
import './App.css';
import Home from "./containers/Home/Home";
import MyWork from "./containers/MyWork/MyWork"
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Project from "./containers/Project/Project";
import AboutMe from "./containers/AboutMe/AboutMe";
import Sidebar from "./components/Sidebar/Sidebar";
import ContactMe from "./containers/ContactMe/ContactMe";
import HcdProject from "./containers/HcdProject/HcdProject";
import NotFound from './containers/NotFound/NotFound';

class App extends Component {

    componentDidMount() {
        document.title = "Virendra Vidyarthee"
    }

    render() {
        return (
            <HashRouter>
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
                            <Route path='/hcd' exact component={HcdProject} />
                            <Route path="/404" component={NotFound} />
                            <Redirect to="/404" />
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
