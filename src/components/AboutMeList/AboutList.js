import React from "react";
import './AboutList.css'
import PropTypes from 'prop-types'

const AboutList = (props) => {
    let data = props.dataSource;
    let items = data.map((value, index) => {
        let image;
        let invisibleDiv;

        if (value.image != null) {
            image = <img className="image"
                         src={value.image}
                         style={value.shouldRotate ? {transform: 'rotate(15deg)'} : null}
                         alt=""/>;
            invisibleDiv = <div className='image-invisible' />;
        } else {
            image = null;
            invisibleDiv = null;
        }
        return (
            <div className={props.className}
                key={index}>
                <p className="year-text-style">{value.year}</p>
                <div className="text-image-container">
                    {invisibleDiv}
                    <p className="text">{value.text}</p>
                    {image}
                </div>
            </div>
        )
    });
    return (
        <div style={{
            flex: 1
        }}>{items}</div>
    )
};

AboutList.propTypes = {
    className: PropTypes.string,
    dataSource: PropTypes.array,
    onClickHandler: PropTypes.func
};

AboutList.defaultProps = {
    className: "",
    dataSource: [],
    onClickHandler: () => {
    }
};

export default AboutList;
