'use strict';

import React                from 'react';
import Slider               from 'react-slick';
import Helpers              from '../../utils/helpers';
import _                    from 'lodash';

const heroConfig = {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    easing: "easeInExpo"
};

const Hero = (props) => {

        return (
            <Slider className="b-hero b-slick" {...heroConfig}>
                {
                    _.map(props.config, (slide)=> {
                    return (
                        <img key={Helpers.random(8)} src="images/hero-bg.png"
                             className="b-hero__slide b-image"
                             alt={slide.alt || ''}
                             style={ {backgroundImage : `url(${slide.image})` } } />
                        );

                    })
                }
            </Slider>
        );

};

export default Hero;
