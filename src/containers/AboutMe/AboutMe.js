import React, {Component} from 'react'
import './AboutMe.css'
import BBAnimation from "../../components/BBAnimation/BBAnimation";
import {aboutMe} from "../../data/Data";
import logo from '../../assets/images/logo.png'

class AboutMe extends Component {
    render() {
        return (
            <div className="Container">
                <img
                    className="My-logo"
                    src={logo}
                    alt=""/>
                <div><h1>About me</h1></div>
                <div>
                    <p className="About-container">{aboutMe}</p>
                </div>

                <BBAnimation/>
            </div>
        )
    }

}

export default AboutMe
