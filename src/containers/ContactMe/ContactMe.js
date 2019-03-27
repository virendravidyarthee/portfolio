import React, {Component} from 'react'
import './ContactMe.css'
import linkedInLogo from "../../assets/images/LinkedIn.png";
import githubLogo from "../../assets/images/github.png";
import gmailLogo from "../../assets/images/gmail.png";
import upworkLogo from "../../assets/images/upwork.png";
import logo from "../../assets/images/logo.png";

class ContactMe extends Component {


    render() {
        return (
            <div className='Contact-me-container'>
                <h1>Wanna get in touch?</h1>
                <div>
                    <p>You can find me on one of the links below.</p>
                    <p>Drop me a mail, I'm always a quick responder.</p>
                </div>

                <div className="Center-content">
                    <div className="Social-container">
                        <a
                            href="https://www.linkedin.com/in/virendra-vidyarthee/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                style={{
                                    width: '33px',
                                    height: '25px',
                                    marginTop: '3px'
                                }}
                                src={linkedInLogo}
                                alt=""/></a>
                        <a
                            href="https://github.com/virendravidyarthee"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                style={{
                                    width: '30px',
                                    height: '30px',
                                }}
                                src={githubLogo}
                                alt=""/></a>
                        <a
                            href="mailto:virendravidyarthee@gmail.com">
                            <img
                                style={{
                                    width: '32px',
                                    height: '30px',
                                }}
                                src={gmailLogo}
                                alt=""/></a>
                        <a
                            href="https://upwork.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                style={{
                                    width: '70px',
                                    height: '27px',
                                }}
                                src={upworkLogo}
                                alt=""/></a>
                    </div>
                    <p>If you're looking for a CV, you can just look at my LinkedIn profile. It's always updated.</p>
                </div>
                <img
                    className="My-logo"
                    src={logo}
                    alt=""/>


            </div>
        );
    }
}

export default ContactMe
