import React, {Component} from 'react';
import './Sidebar.css'
import home from '../../assets/images/home.png'
import logo from '../../assets/images/logo.png'
import about from '../../assets/images/about.png'
import work from '../../assets/images/work.png'
import contactMe from '../../assets/images/contact_me.png'

class Sidebar extends Component {
    state = {};

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        return (
            <div
                className="Sidebar-container">
                <img
                    className="Logo"
                    src={logo}
                    alt=""
                    onClick={() => {
                        this.props.history.push('/')
                    }}/>
                <div className="Items-container">
                    <div
                        className="Item"
                        onClick={() => {
                            this.props.history.push('/')
                        }}>
                        <img
                            className="Item-image"
                            src={home}
                            alt="">
                        </img>
                        <p className="Item-text-home">Home</p>
                    </div>
                    <div
                        className="Item"
                        onClick={() => {
                            this.props.history.push('/about-me')
                        }}>
                        <img
                            className="Item-image"
                            src={about}
                            alt=""/>
                        <p className="Item-text">About me</p>
                    </div>
                    <div className="Item"
                         onClick={() => {
                             this.props.history.push('/my-work')
                         }}>
                        <img
                            className="Item-image"
                            src={work}
                            alt=""/>
                        <p className="Item-text">My work</p>
                    </div>
                    <div
                        className="Item"
                        onClick={() => {
                            this.props.history.push('/contact-me')
                        }}>
                        <img
                            className="Item-image"
                            src={contactMe}
                            alt=""/>
                        <p className="Item-text">Contact me</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar
