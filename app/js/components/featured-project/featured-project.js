'use strict';

import React                from 'react';
import RedirectLink         from '../redirect-link/redirect-link';
import Waypoint             from 'react-waypoint';

const propTypes = {
    toPage: React.PropTypes.string,
    className: React.PropTypes.string,
    title: React.PropTypes.string,
    navigationTitle: React.PropTypes.string,
    text: React.PropTypes.string,
    image: React.PropTypes.string,
    type: React.PropTypes.string,
    animationDelay: React.PropTypes.string
};

class FeaturedProject extends React.Component {

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
                <div className={`b-featured-project b-component--with-bottom-content
                    ${this.state.enteredWayPoint === true ?
                        'animated zoomIn b-animate__duration--fast ' + this.props.animationDelay || '':
                        'b-component--invisible' }
                    ${this.props.className || '' }
                    ${this.props.displayMode === 'vertical' ?
                            'b-featured-project--vertical' : 'b-featured-project--landscape'
                        }`}>

                    <RedirectLink to={`${this.props.toPage}/${this.props.navigationTitle}`}
                          className="b-link-figure b-link b-link--block b-text--color-dark" >

                        <img src="images/0.gif"
                             className={`
                            b-image b-featured-project__image
                            b-link-figure__image
                            ${ this.props.displayMode === 'vertical' ? 'b-image--ratio-5-6' : 'b-image--ratio-3-2' }
                        `}  alt={this.props.alt || ''}
                            style={ {backgroundImage : `url(${this.props.image})` } } />

                        <div className="b-box--half-loose-left b-link-figure__content-wrapper">

                            <i className="b-featured-project__icon b-icon b-icon--pointer-right
                                        b-link-figure__title-icon b-text--size-larger" ></i>

                            <h4 className="b-title b-title--h4 b-link-figure__title">
                                {this.props.title}
                            </h4>

                            <div className="b-text b-text--size-larger b-text--color-dark-grey"
                                 dangerouslySetInnerHTML={{__html: this.props.text}} >
                            </div>
                        </div>

                    </RedirectLink>
                </div>
            </Waypoint>
        );
    }

}

FeaturedProject.propTypes = propTypes;

export default FeaturedProject;
