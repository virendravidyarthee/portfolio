import React, {Component} from 'react';
import Slider from "react-slick";
import './Project.css'
import {Link} from "react-router-dom";
let myWorkArray = require("../../data/Data.js").myWorkArray;

class Project extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility: true
        };

        const project = myWorkArray[this.props.match.params.id];

        return (
            <div className="Project">
                <div>
                    <h1>{project.projectName}</h1>
                </div>
                <Slider
                    className="Slider"
                    {...settings}>
                    <div>
                        <img className="Image"
                             src="https://cdn-images-1.medium.com/max/1000/1*bIUXCGYsVTXyBndd4suLfA.png" alt=""/>
                    </div>
                    <div>
                        <img className="Image"
                             src="https://cdn-images-1.medium.com/max/1000/1*bIUXCGYsVTXyBndd4suLfA.png" alt=""/>
                    </div>
                    <div>
                        <img className="Image"
                             src="https://cdn-images-1.medium.com/max/1000/1*bIUXCGYsVTXyBndd4suLfA.png" alt=""/>
                    </div>
                    <div>
                        <img className="Image"
                             src="https://cdn-images-1.medium.com/max/1000/1*bIUXCGYsVTXyBndd4suLfA.png" alt=""/>
                    </div>
                    <div>
                        <img className="Image"
                             src="https://cdn-images-1.medium.com/max/1000/1*bIUXCGYsVTXyBndd4suLfA.png" alt=""/>
                    </div>
                    <div>
                        <img className="Image"
                             src="https://cdn-images-1.medium.com/max/1000/1*bIUXCGYsVTXyBndd4suLfA.png" alt=""/>
                    </div>
                </Slider>
                <div className="Description-container">
                    <div className="Links-container">
                        <Link
                            className="Link"
                            to="">App link</Link>
                    </div>
                    <p className="Full-description">{project.fullDescription}</p>
                    <div style={{height: "50px"}}>
                        <p>.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project
