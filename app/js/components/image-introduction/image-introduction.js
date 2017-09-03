'use strict';

import React                from 'react';
import Waypoint             from 'react-waypoint';

const propTypes = {
    image: React.PropTypes.string,
    title: React.PropTypes.string,
    highlight: React.PropTypes.string,
    bodyText: React.PropTypes.string
};

class ImageIntroduction extends React.Component {

    constructor(props) {
        super(props);
        this.handleWayPointEnter = this.handleWayPointEnter.bind(this);
        this.state = {
            enteredWayPoint: false
        };
    }

    handleWayPointEnter(){
        if(this.state.enteredWayPoint === false){
            this.setState({
                enteredWayPoint: true
            });
        }
    }

    render() {

        return (
            <Waypoint
                topOffset={-250}
                scrollableAncestor={window}
                onEnter={this.handleWayPointEnter}
            >
                <div className={`b-image-introduction b-box b-box--loose-left
                                ${this.props.className || '' }`}>
                    <div className="b-image-introduction__wrapper ">

                        <img src="images/0.gif" alt={this.props.alt || ''}
                             className="b-image b-image--ratio-5-4 b-component--tight
                                        animated fadeIn b-animate__delay--1200ms"
                             style={ {backgroundImage: `url(${this.props.image})`} }/>

                        <h3 className="b-title b-title--h3 b-text--color-dark
                                        animated fadeIn b-animate__delay--1400ms"
                            dangerouslySetInnerHTML={{__html: this.props.title}}></h3>

                        <div className="b-text b-text--bold b-text--size-largest
                                        animated fadeIn b-animate__delay--1600ms"
                             dangerouslySetInnerHTML={{__html: this.props.highlight}}></div>

                        <div className="b-text b-text--size-largest b-text--color-dark-grey
                                        animated fadeIn b-animate__delay--1800ms"
                             dangerouslySetInnerHTML={{__html: this.props.bodyText}}></div>
                    </div>

                </div>
            </Waypoint>
        );
    }

}

ImageIntroduction.propTypes = propTypes;

export default ImageIntroduction;
