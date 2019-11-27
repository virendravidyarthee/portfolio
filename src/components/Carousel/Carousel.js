import React from "react";
import PropTypes from 'prop-types'
import Slider from "react-slick";

const Carousel = (props) => {
    let images = props.images.map((value, index) => {
        return (
            <div
                key={index}>
                <img src={value}
                     alt=""
                     style={{
                         width: '355px',
                         height: 'auto',
                         maxHeight: '700px',
                         margin: 'auto'
                     }}/>
            </div>
        )
    });
    let settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            {images}
        </Slider>
    );
};

Carousel.propTypes = {
    images: PropTypes.array
};

Carousel.defaultProps = {
    images: []
};

export default Carousel;
