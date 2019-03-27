import React, {Component} from 'react';
import './App.css';
import Home from "./containers/Home/Home";
import MyWork from "./containers/MyWork/MyWork"
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Project from "./containers/Project/Project";
import AboutMe from "./containers/AboutMe/AboutMe";
import Sidebar from "./components/Sidebar/Sidebar";
import ContactMe from "./containers/ContactMe/ContactMe";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="Sidebar">
                        <Route path='/' component={Sidebar}/>
                    </div>
                    <div className="Content">
                        <Route path='/' exact component={Home}/>
                        <Route path='/my-work' exact component={MyWork}/>
                        <Route path='/project/:id' exact component={Project}/>
                        <Route path='/about-me' exact component={AboutMe}/>
                        <Route path='/contact-me' exact component={ContactMe}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
