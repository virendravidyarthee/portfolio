import React, {Component} from 'react';
import './MyWork.css'
import Grid from "../../components/Grid/Grid";
import {myWorkSubtitle} from "../../data/Data";
let myWorkArray = require("../../data/Data.js").myWorkArray;

class MyWork extends Component {


    onItemClick = (index: Number) => {
        this.props.history.push('/project/' + index)
    };

    render() {
        return (
            <div style={{
                backgroundColor: '#212121'
            }}>
                <div className="Header">
                    <h1>Development Portfolio</h1>
                </div>

                <div className="Sub-title">
                    <p>{myWorkSubtitle}</p>
                </div>
                <Grid
                    className="Grid-container"
                    dataSource={myWorkArray}
                    onClickHandler={this.onItemClick}
                />
            </div>
        );
    }
}


export default MyWork
