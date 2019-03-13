import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Particles className="Particles"
                           canvasClassName="Particles-canvas"
                           params={{
                               "particles": {
                                   "number": {
                                       "value": 40
                                   }
                               }
                           }}/>
                <div className="Content-container">
                    <div>
                        <p className="Name-header">Hi, I'm Virendra.</p>
                        <p className="Sub-title-one">Android Enthusiast.</p>
                        <p className="Sub-title-two">Full stack developer.</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
