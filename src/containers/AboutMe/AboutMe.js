import React, {Component} from 'react'
import './AboutMe.css'
import BBAnimation from "../../components/BBAnimation/BBAnimation";
import {aboutMe} from "../../data/Data";
import logo from '../../assets/images/logo.png'
import profilePicture from '../../assets/images/profile_circle.png'
import AboutList from "../../components/AboutMeList/AboutList";
import {aboutMeArray} from "../../data/Data";

class AboutMe extends Component {
    componentDidMount(){
        document.title = 'Virendra Vidyarthee: About me'
    }
    render() {
        return (
            <div className="Container">
                <img
                    className="My-logo-about-me"
                    src={logo}
                    alt=""/>
                <div className='profile-title-container'>
                    <p
                        className="Title">
                        About me - a history lesson</p>
                    <img
                        className="profile-picture"
                        src={profilePicture}
                        alt=''/>
                </div>
                <div style={{
                    width: '100%'
                }} >
                    <p className="About-container">{aboutMe}</p>
                    <AboutList className='about-list-container' dataSource={aboutMeArray}/>
                </div>

                <BBAnimation/>
            </div>
        )
    }

}

export default AboutMe
