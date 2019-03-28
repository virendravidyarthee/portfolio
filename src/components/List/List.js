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
            <div
                key={index}
                onClick={() =>{
                    props.onClickHandler(index)
                }}>
                <div className={separatorClassName}/>
                <div className={contentClassName}>
                    <img
                        style={{
                            minWidth:'180px',
                            width:'180px'
                        }}
                        className={imageClassName}
                        src={value.image}
                        alt=""/>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width:'100%'
                        }}>
                        <p style={{
                            marginBottom: '0px',
                            fontSize: '22px',
                            textAlign:'center'
                        }}>{value.projectName}</p>
                        <p className={props.textClassName}>{value.shortDescription}</p>
                    </div>
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
    dataSource: PropTypes.array,
    onClickHandler: PropTypes.func
};

List.defaultProps = {
    className: "",
    textClassName: "",
    dataSource: [],
    onClickHandler: () => {
    }
};

export default List;
