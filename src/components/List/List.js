import React from "react";
import PropTypes from 'prop-types'
import './List.css'

const List = (props) => {
    let data = props.dataSource;
    let items = data.map((value, index) => {
        return (
            <div
                className="item-container"
                key={index}
                onClick={() => {
                    props.onClickHandler(index)
                }}>
                <div/>
                <div className="Separator"/>
                <div>
                    <p style={{
                        marginBottom: '0px',
                        fontSize: '22px',
                        textAlign: 'center'
                    }}>{value.projectName}</p>
                    <div className='image-text-container'>
                        <img
                            className="List-image"
                            src={value.cover}
                            alt=""/>
                        <p className="List-text">{value.shortDescription}</p>
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
