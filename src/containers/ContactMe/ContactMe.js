import React, {Component} from 'react'
import './ContactMe.css'
import linkedInLogo from "../../assets/images/LinkedIn.png";
import githubLogo from "../../assets/images/github.png";
import gmailLogo from "../../assets/images/gmail.png";
import upworkLogo from "../../assets/images/upwork.png";
import logo from "../../assets/images/logo.png";

class ContactMe extends Component {

    componentDidMount(){
        document.title = 'Virendra Vidyarthee: Contact me'
    }

    render() {
        return (
            <div className='Contact-me-container'>
                <p
                    className="Title">Wanna get in touch?</p>
                <div>
                    <p
                        className="Contact-me-content">You can find me on one of the links below.</p>
                    <p
                        className="Contact-me-content">Drop me a mail, I'm always a quick responder. Click on the Gmail icon.</p>
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
                            href="mailto:virendra@virendravidyarthee.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                style={{
                                    width: '32px',
                                    height: '30px',
                                }}
                                src={gmailLogo}
                                alt=""/></a>
                        <a
                            href="https://www.upwork.com/o/profiles/users/_~01164e795fbcd3a2aa/"
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
                    <p
                        className="Contact-me-content-bottom">If you're looking for a CV, you can just look at my LinkedIn profile. It's always updated.</p>
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
