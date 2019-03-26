import React, {Component} from 'react';
import './MyWork.css'
import {myWorkSubtitle} from "../../data/Data";
import List from "../../components/List/List";

let myWorkArray = require("../../data/Data.js").myWorkArray;

class MyWork extends Component {


    onItemClick = (index: Number) => {
        this.props.history.push('/project/' + index)
    };

    render() {
        return (
            <div style={{
                width: '100%',
                overflowY:'scroll'
            }}>
                <div className="Header">
                    <h1>Development Portfolio</h1>
                </div>

                <div className="Sub-title">
                    <p>{myWorkSubtitle}</p>
                </div>
                <List
                    className="List-container"
                    dataSource={myWorkArray}
                    imgClassName="List-image"
                    textClassName="List-text"
                />
            </div>
        );
    }
}


export default MyWork
