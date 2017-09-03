'use strict';

import React                from 'react';
import RedirectLink         from '../redirect-link/redirect-link';
import Waypoint           from 'react-waypoint';

const propTypes = {
    toPage: React.PropTypes.string,
    className: React.PropTypes.string,
    title: React.PropTypes.string,
    subTitle: React.PropTypes.string,
    navigationTitle: React.PropTypes.string,
    text: React.PropTypes.string,
    image: React.PropTypes.string,
    displayMode: React.PropTypes.string,
    animationDelay: React.PropTypes.string
};


class GalleryItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleWayPointEnter = this.handleWayPointEnter.bind(this);
        this.getGalleryPanel = this.getGalleryPanel.bind(this);
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

    getGalleryPanel() {

        if(this.props.text) {
            return (
                <div className="b-gallery-item__text-holder b-text--size-large" >
                    {this.props.text}
                </div>
            );
        } else {
            return (
                <img src="images/0.gif"
                     className={`b-link-figure__image b-image
                                ${ this.props.displayMode === 'vertical' ?
                         'b-image--square' : 'b-image--ratio-3-2' } `}
                     alt={this.props.alt || ''}
                     style={ {backgroundImage : `url(${this.props.image})` } } />
            );
        }
    }

    render() {
        return (
            <Waypoint
                topOffset={-250}
                scrollableAncestor={window}
                onEnter={this.handleWayPointEnter}
            >
                <div className={` b-gallery-item
                    ${this.props.className || '' }
                    ${this.state.enteredWayPoint === true ?
                    'animated zoomIn b-animate__duration--fast '+ this.props.animationDelay || '' :
                    'b-component--invisible'}
                `} >

                    <RedirectLink to={`${this.props.toPage}/${this.props.navigationTitle}`}
                          className="b-link-figure b-link b-link--block b-text--color-dark
                                     b-rule b-rule--light-bottom b-rule--bright-bottom" >

                        <div className="b-gallery-item__content-holder b-component--very-tiny">
                            {this.getGalleryPanel()}
                        </div>

                        <div className="b-link-figure__content-wrapper">

                            <div className="b-text b-text--bold b-text--size-larger
                                            b-component--very-tiny b-link-figure__title"
                                 dangerouslySetInnerHTML={{__html: this.props.title}} >
                            </div>

                            <div className="b-text b-text--size-mid-large b-component--tiny
                                            b-text--color-dark-grey"
                                 dangerouslySetInnerHTML={{__html: this.props.subTitle}} >
                            </div>

                        </div>

                    </RedirectLink>
                </div>
            </Waypoint>

        );
    }



}

GalleryItem.propTypes = propTypes;

export default GalleryItem;
