import React, {Component} from 'react';
import './HcdProject.css';
import persona from "../../assets/images/persona.jpg"
import sketches from "../../assets/images/sketch.jpg"
import paperPrototype from "../../assets/images/paperPrototype.jpg"
import hifi from "../../assets/images/lofi.jpg"
import Carousel from "../../components/Carousel/Carousel";


let myWorkArray = require("../../data/Data.js").myWorkArray;

class HcdProject extends Component {
    render() {
        const project = myWorkArray[3];

        return (
            <div style={{
                flex: 1,
                overflowY: 'scroll'
            }}>
                <p className='text'>Diabetes Check - UX study</p>
                <div className='image-container'>
                    <img
                        className="hcd-image"
                        src={project.cover}
                        alt=""/>
                </div>
                <p className='text'>We set out to design an app that could make the life of diabetes patients
                    easier.</p>
                <p className='text'>We did some primary research with patients who have been living with diabetes for a
                    long time.
                    We identified their pain points. We saw a need for help with logging, dietary suggestions and
                    exercise.</p>
                <div className='image-container'>
                    <img
                        className="hcd-image persona"
                        src={persona}
                        alt=""/>
                </div>
                <p className='text'>Our goal was to develop a mobile app.</p>
                <p className='text'>So we did some sketching...</p>
                <div className='image-container'>
                    <img
                        className="hcd-image"
                        src={sketches}
                        alt=""/>
                </div>
                <p className='text'>And some low fidelity prototyping…</p>
                <div className='image-container'>
                    <img
                        className="hcd-image paper-prototype"
                        src={paperPrototype}
                        alt=""/>
                </div>
                <p className='text'>And then some high fidelity ones…</p>
                <div className='image-container'>
                    <img
                        className="hcd-image"
                        src={hifi}
                        alt=""/>
                </div>
                <p className='text'>And then came the designs...</p>
                <div className='image-container'>
                    <div className="carousel-container">
                        <Carousel style={{
                            margin: 'auto'
                        }} images={project.images}/>
                    </div>
                </div>
                <p className='text'
                   style={{
                       marginBottom: '60px'
                   }}>Usability tests were ran an every stage. And the users were in love.</p>
            </div>
        )
    }
}

export default HcdProject
