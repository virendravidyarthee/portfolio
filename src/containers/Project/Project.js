import React, {Component} from 'react';
import './Project.css'

let myWorkArray = require("../../data/Data.js").myWorkArray;

class Project extends Component {


    render() {
        const project = myWorkArray[this.props.match.params.id];

        const links = () =>{
            let externalLinks = [];
            if(project.appLink != null){
                externalLinks.push(
                    <a
                        href={project.appLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="Link">App link</a>
                )
            }
            if(project.siteLink != null){
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
                <div>
                    <h1>{project.projectName}</h1>
                </div>
                <div className="Full-Logo">
                    <img
                        style={{
                            maxHeight: '192px'
                        }}
                        src={project.image}
                        alt=""/>
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
