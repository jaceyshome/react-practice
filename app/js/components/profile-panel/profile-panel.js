'use strict';

import React                from 'react';
import {Link}               from 'react-router';
import PopupActions from '../../actions/popupActions';
import PopupStore from '../../stores/popupStore';
import Waypoint             from 'react-waypoint';

const propTypes = {
    className: React.PropTypes.string,
    image: React.PropTypes.string,
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    email: React.PropTypes.string,
    introduction: React.PropTypes.string,
    description: React.PropTypes.string
};

class ProfilePanel extends React.Component {

    constructor(props) {
        super(props);
        this.showPopupDescription = this.showPopupDescription.bind(this);
        this.handleWayPointEnter = this.handleWayPointEnter.bind(this);
        this.state = {
            enteredWayPoint: false
        };
    }

    handleWayPointEnter(){
        if(this.state.enteredWayPoint === false){
            this.setState({ enteredWayPoint: true });
        }
    }

    showPopupDescription() {
        PopupActions.show(
            (
                <div>
                    <h4 className="b-title b-title--h4 b-text--color-white
                                b-profile-panel__title b-popup__title" >{this.props.title}</h4>

                    <p className="b-text--color-white b-text--bold b-text--size-largest">{this.props.subtitle}</p>

                    <a className="b-link b-link--block b-text--color-white"
                       href={`mailto: ${this.props.email}`}>
                        <span className="b-link__text b-text--size-largest">{this.props.email}</span>
                    </a>

                    <div className="b-introduction__highlight b-text b-text--size-largest"
                         dangerouslySetInnerHTML={{__html: this.props.description}}></div>

                </div>
            )
        );
    }

    render() {

        return (
            <Waypoint
                scrollableAncestor={window}
                onEnter={this.handleWayPointEnter}
            >
                <div className={`
                    b-profile-panel b-position__container b-image
                    ${this.props.className || '' }
                    ${this.state.enteredWayPoint === true ? 'animated zoomIn b-animate__duration--fast' :
                        'b-component--invisible'}
                `} >

                    <div className={`b-profile-panel__content-holder
                        ${ this.props.displayMode === 'vertical' ?
                           'b-profile-panel__content-holder--square' : 'b-profile-panel__content-holder--ratio-3-2'
                        }
                    `}>

                        <h4 className="b-title b-title--h4 b-text--color-white b-profile-panel__title" >{this.props.title}</h4>

                        <p className="b-text--color-white b-text--bold b-text--size-largest">{this.props.subtitle}</p>

                        <a className="b-link b-link--block b-text--color-white"
                           href={`mailto: ${this.props.email}`}>
                            <span className="b-link__text b-text--size-larger">{this.props.email}</span>
                        </a>

                        <div className="b-introduction__highlight b-text b-text--size-larger"
                             dangerouslySetInnerHTML={{__html: this.props.introduction}}></div>

                        <a className="b-link b-link--block b-text--color-dark b-link--normal"
                           onClick={this.showPopupDescription}>
                            <span className="b-link__text">Read more</span>
                        </a>

                    </div>

                    <div className="b-position__child b-position__child--top
                    b-image b-position__child--left b-position__child--right
                    b-position__child--bottom b-profile-panel__image-holder
                    ${ this.props.displayMode === 'vertical' ?
                           'b-profile-panel--square' : 'b-profile-panel--ratio-3-2'
                    }"
                         style={ {backgroundImage : `url(${this.props.image})` } } >
                    </div>

                </div>
            </Waypoint>
        );
    }

}

ProfilePanel.propTypes = propTypes;

export default ProfilePanel;
