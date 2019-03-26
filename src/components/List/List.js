import React from "react";
import PropTypes from 'prop-types'
import './List.css'

const List = (props) => {
    let data = props.dataSource;
    let items = data.map((value, index) => {
        let contentClassName = "List-content-container";
        let imageClassName = "List-image";
        let separatorClassName = "Separator";
        if (index % 2 === 0) {
            contentClassName = "List-content-reversed";
            imageClassName = "List-image-reversed";
            separatorClassName = "Separator-reversed";
        }
        return (
            <div key={index}>
                <div className={separatorClassName}/>
                <div className={contentClassName}>
                    <img
                        className={imageClassName}
                        src="https://cdn-images-1.medium.com/max/1000/1*bIUXCGYsVTXyBndd4suLfA.png"
                        alt=""/>
                    <p className={props.textClassName}>{value.shortDescription}</p>
                </div>
            </div>
        )
    });

    return (
        <div className={props.className}>
            {items}
        </div>
    )
};

List.propTypes = {
    className: PropTypes.string,
    textClassName: PropTypes.string,
    dataSource: PropTypes.array
};

List.defaultProps = {
    className: "",
    textClassName: "",
    dataSource: []
};

export default List;
