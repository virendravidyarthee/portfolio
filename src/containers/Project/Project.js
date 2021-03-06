import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'

import './Project.css'
import Carousel from "../../components/Carousel/Carousel";


let myWorkArray = require("../../data/Data.js").myWorkArray;

class Project extends Component {

    componentDidMount(){
        if(parseInt(this.props.match.params.id)+1 < myWorkArray.length){
            document.title = `Virendra Vidyarthee: ${myWorkArray[this.props.match.params.id].projectName}`
        }
    }

    render() {
        if(parseInt(this.props.match.params.id)+1 > myWorkArray.length){
            return <Redirect to='/404' />
        }
        const project = myWorkArray[this.props.match.params.id];

        const links = () => {
            let externalLinks = [];
            if (project.appLink != null) {
                externalLinks.push(
                    <a
                        href={project.appLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="Link">App link</a>
                )
            }
            if (project.siteLink != null) {
                externalLinks.push(
                    <a
                        href={project.siteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="Link">Site Link</a>
                )
            }
            return externalLinks;
        };

        return (
            <div className="Project">
                <div className="title-image-container">
                    <img
                        className="Full-Logo"
                        src={project.image}
                        alt=""/>
                    <h1>{project.projectName}</h1>
                </div>
                <div className="carousel-container">
                    <Carousel images={project.images}/>
                </div>
                <div className="Description-container">
                    <div className="Links-container">
                        {links()}
                    </div>
                    <p className="Full-description">{project.fullDescription}</p>
                </div>
            </div>
        )
    }
}

export default Project
