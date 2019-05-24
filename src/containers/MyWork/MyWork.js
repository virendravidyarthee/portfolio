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
                height:'100%',
                overflow:'scroll'
            }}>
                <p className="Header">My Projects</p>

                <div className="Sub-title">
                    <p>{myWorkSubtitle}</p>
                </div>
                <div className="mouse">
                    <span/>
                </div>
                <List
                    className="List-container"
                    dataSource={myWorkArray}
                    imgClassName="List-image"
                    textClassName="List-text"
                    onClickHandler={this.onItemClick}
                />
            </div>
        );
    }
}


export default MyWork
