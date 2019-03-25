import React, {Component} from 'react';
import './App.css';
import Home from "./containers/Home/Home";
import MyWork from "./containers/MyWork/MyWork"
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Project from "./containers/Project/Project";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route path='/' exact component={Home}/>
                    <Route path='/my-work' exact component={MyWork}/>
                    <Route path='/project/:id' exact component={Project}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
