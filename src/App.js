import React, {Component} from 'react';
import './App.css';
import Home from "./containers/Home/Home";
import MyWork from "./containers/MyWork/MyWork"
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route path='/' exact component={Home}/>
                    <Route path='/my-work' exact component={MyWork}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
