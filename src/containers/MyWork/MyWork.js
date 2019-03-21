import React, {Component} from 'react';
import './MyWork.css'
import projectPlaceholder from "../../assets/images/start-up.png"
import Grid from "../../components/Grid/Grid";
import {projectShortDescription} from "../../data/Data";

class MyWork extends Component {

    myWorkArray = () => {
        return [
            {image: projectPlaceholder, description: projectShortDescription},
            {image: projectPlaceholder, description: projectShortDescription},
            {image: projectPlaceholder, description: projectShortDescription},
            {image: projectPlaceholder, description: projectShortDescription},
            {image: projectPlaceholder, description: projectShortDescription}
        ]
    };

    onItemClick = (index:Number) =>{
        alert(index)
    };

    render() {
        return (
            <div>
                <div>
                    <h1>Development Portfolio</h1>
                </div>
                <Grid
                    dataSource={this.myWorkArray()}
                    onClickHandler={this.onItemClick}
                />
            </div>
        );
    }
}


export default MyWork
