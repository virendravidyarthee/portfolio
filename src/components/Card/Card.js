import React from "react";
import PropTypes from 'prop-types'
import './Card.css'

const Card = (props) =>{
    return(
        <div onClick={() =>{
            props.onClickHandler(props.index)
        }} className="Card">
            {props.children}
        </div>
    )
};

Card.propTypes ={
    onClickHandler:PropTypes.func,
    index: PropTypes.number
};

Card.defaultProps = {
    onClickHandler:() =>{},
    index: -1
};

export default Card
