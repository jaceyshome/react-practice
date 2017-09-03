'use strict';

import React                from 'react';
import Slider               from 'react-slick';
import GalleryItem          from '../../components/gallery-item/gallery-item';
import Helpers              from '../../utils/helpers';
import TextStore            from '../../stores/textStore';
import _                    from 'lodash';

const carouselConfig = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const propTypes = {
    label: React.PropTypes.string,
    toPage: React.PropTypes.string,
    config: React.PropTypes.array,
    className: React.PropTypes.string
};

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.renderSlides = this.renderSlides.bind(this);
    }

    next() {
        this.refs.slider.slickNext()
    }
    previous() {
        this.refs.slider.slickPrev()
    }

    render() {

        return (

            <div>
                <div className="b-carousel__label b-box--tiny-left">
                    <span className="b-text b-text--upper b-text--size-large b-box">{this.props.label}</span>
                    <a onClick={this.previous} className="b-link b-link--featured b-carousel__button">
                        <span className="b-icon b-icon--pointer-left b-link__icon
                                         b-text--size-large b-icon--top-offset"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a onClick={this.next} className="b-link b-link--featured b-carousel__button b-carousel__button--sm-gap">
                        <span className="b-icon b-icon--pointer-right b-link__icon
                                         b-text--size-large b-icon--top-offset"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <Slider ref='slider' {...carouselConfig}
                        className={`b-carousel b-slick b-component ${this.props.className}`} >
                    {React.Children.map(this.renderSlides(), (slide) => {
                        //GalleryItem is function type, but for nested children, should be array
                        return  (
                            <div className="b-carousel__slide">{slide}</div>
                        );
                    })}
                </Slider>

            </div>

        );
    }

    renderSlides() {
        let toPage = this.props.toPage;
        return _.map(this.props.config, (slide, index)=> {
            return (
                <GalleryItem
                    toPage={toPage}
                    key={Helpers.random(8)}
                    navigationTitle={`${Helpers.stripHtml(TextStore.getText(slide.navigationTitle))}`}
                    title={Helpers.stripHtml(TextStore.getText(slide.title))}
                    image={Helpers.stripHtml(TextStore.getText(slide.image))}
                    subTitle={Helpers.stripHtml(TextStore.getText(slide.subTitle))}
                    animationDelay={`b-animate__delay--${Helpers.getAnimationDelayByIndex(index+1)}ms`}
                >
                </GalleryItem>
            );
        });
    }

}

Carousel.propTypes = propTypes;

export default Carousel;
