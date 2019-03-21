import React from "react";
import PropTypes from 'prop-types'
import './Grid.css'
import Card from "../../components/Card/Card";

const Grid = (props) => {
    const totalItems = props.dataSource.length;
    const columns = 2;
    const totalRows = Math.floor(totalItems / columns);
    const allCards = props.dataSource.map((value, index) => {
        return (<Card
            onClickHandler={props.onClickHandler}
            index={index}>
            <img src={value.image}
                 className="image"
                 alt=""/>
            <p className="Text">{value.description}</p>
        </Card>)
    });

    const rows = new Array(totalRows);
    const row = new Array(columns);

    allCards.forEach((value, index) => {
        row.push(<div key={index} className="column">{value}</div>);
        if ((index + 1) % columns === 0) {
            rows.push(<div key={index} className="row">{row.slice()}</div>);
            row.length = 0;
        } else if ((index + 1) === allCards.length) {
            rows.push(<div key={index} className="row">{row.slice()}</div>);
            row.length = 0;
        }
    });


    return (
        <div>
            {rows}
        </div>
    )
};

Grid.propTypes = {
    className: PropTypes.string,
    dataSource: PropTypes.array,
    onClickHandler: PropTypes.func
};

Grid.defaultProps = {
    className: "",
    dataSource: [],
    onClickHandler: () => {
    }
};

export default Grid
