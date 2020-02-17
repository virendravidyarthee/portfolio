import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './Home.css'
import arrow from '../../assets/images/arrow_right.png'
import particleParams from "../../utils/particles/config";
import {Link} from 'react-router-dom'

class Home extends Component {
    componentDidMount() {
        document.title = "Virendra Vidyarthee"
    }
    render() {
        return (
            <div className="Home">
                <Particles className="Particles"
                           params={particleParams}/>
                <div className="Content-container">
                    <div>
                        <p className="Name-header">Hi, I'm Virendra Vidyarthee.</p>
                        <p className="Sub-title-one">Android Enthusiast.</p>
                        <p className="Sub-title-two">Full stack developer.</p>
                        <p className="Sub-title-two">UX Designer.</p>
                    </div>
                    <div className="Link-container">
                        <Link
                            to='/about-me'
                            className="My-work-link">
                            <div className="Link-content hvr-forward">
                                <p>Get to know me</p>
                                <img className="Right-arrow" src={arrow} alt=""/>
                            </div>
                        </Link>
                    </div>
                    <div className="Link-container">
                        <Link
                            to='/my-work'
                            className="My-work-link">
                            <div className="Link-content hvr-forward">
                                <p>Checkout my work</p>
                                <img className="Right-arrow" src={arrow} alt=""/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
