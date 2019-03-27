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
                            width:'250px',
                            objectFit:'cover'
                        }}
                        className={imageClassName}
                        src="https://cdn-images-1.medium.com/max/1000/1*bIUXCGYsVTXyBndd4suLfA.png"
                        alt=""/>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width:'100%'
                        }}>
                        <p style={{
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
