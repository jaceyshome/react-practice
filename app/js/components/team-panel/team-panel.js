'use strict';

import React                        from 'react';
import {WindowResizeListener}       from 'react-window-resize-listener'
import TextStore                    from '../../stores/textStore';
import TextActions                  from '../../actions/textActions';
import Helpers                      from '../../utils/helpers';
import ProfilePanel                 from '../../components/profile-panel/profile-panel';
import Waypoint                     from 'react-waypoint';
import _                            from 'lodash';

const propTypes = {
    config: React.PropTypes.object,
    className: React.PropTypes.string
};

class TeamPanel extends React.Component {

    constructor(props) {
        super(props);
        this.buildDesktopProfileLists = this.buildDesktopProfileLists.bind(this);
        this.renderPanelDesktopMode = this.renderPanelDesktopMode.bind(this);
        this.renderPanelMobileMode = this.renderPanelMobileMode.bind(this);
        this.handleWayPointEnter = this.handleWayPointEnter.bind(this);
        this.state = {
            leftItems: [],
            rightItems: [],
            renderCurrentPanel: null,
            enteredWayPoint: false
        };
    }

    handleWayPointEnter(){
        if(this.state.enteredWayPoint === false) {
            this.setState(_.assign({}, this.state, {
                enteredWayPoint: true
            }));
        }
    }

    buildDesktopProfileLists() {

        var leftItems = [];
        var rightItems = [];

        _.map(this.props.config.profileList, (profile, key)=> {

            if(profile.desktopColumn === "left") {
                leftItems.push(profile);
            }
            if(profile.desktopColumn === "right") {
                rightItems.push(profile);
            }
        });

        this.setState(_.assign({},this.state,{
            leftItems: leftItems,
            rightItems: rightItems
        }));

    }

    componentWillMount() {
        this.buildDesktopProfileLists();
    }

    //------------------- render --------------------

    render() {
        return (
            <div className={`grid grid--flush ${this.props.className || ''}`}>

                <WindowResizeListener onResize={ windowSize => {

                    if (windowSize.windowWidth > 1024  ) {
                        this.setState(_.assign({},this.state,{renderCurrentPanel: this.renderPanelDesktopMode}));
                    } else {
                        this.setState(_.assign({},this.state,{renderCurrentPanel: this.renderPanelMobileMode}));
                    }

                }}/>

                {this.state.renderCurrentPanel ? this.state.renderCurrentPanel() : ''}

            </div>
        );
    }

    renderPanelDesktopMode(){
        return (
            <div className="b-team-panel--desktop">
                <div className="1/2--desk grid__cell">
                    {this.renderProfilePanel(this.state.leftItems)}
                </div>

                <div className="1/2--desk grid__cell">
                    {this.renderHeader(this.props.config.header)}

                    {this.renderProfilePanel(this.state.rightItems)}

                    {this.renderFooter(this.props.config.footer)}
                </div>
            </div>
        );
    }

    renderPanelMobileMode(){
        return  (
            <div className="b-team-panel--mobile">
                {this.renderHeader(this.props.config.header)}

                <div className="1/2--desk grid__cell">
                    {this.renderProfilePanel(this.props.config.profileList)}
                </div>

                {this.renderFooter(this.props.config.footer)}

            </div>
        );
    }

    renderProfilePanel(items) {
        if (items === null) {
            return <div></div>;
        }
        return _.map(items, (item)=> {
            return (
                <ProfilePanel
                    key={Helpers.random(8)}
                    image={Helpers.stripHtml(TextStore.getText(item.image))}
                    title={Helpers.stripHtml(TextStore.getText(item.title))}
                    subtitle={Helpers.stripHtml(TextStore.getText(item.subtitle))}
                    email={Helpers.stripHtml(TextStore.getText(item.email))}
                    introduction={TextStore.getText(item.introduction)}
                    description={TextStore.getText(item.description)}
                    displayMode={item.displayMode}
                />
            )
        })
    }

    renderHeader(config) {
        return (
            <Waypoint
                scrollableAncestor={window}
                onEnter={this.handleWayPointEnter}
            >
                <div className={`b-team-panel__container b-team-panel__container--header
                        ${this.state.enteredWayPoint === true ?
                            'animated zoomIn b-animate__duration--fast' :
                            'b-component--invisible'}`} >
                    <h3 className="b-title b-title--h2 b-text--color-orange b-team-panel__header-title">
                        {Helpers.stripHtml(TextStore.getText(config.title))}
                    </h3>
                    <div className="b-team-panel__highlight b-text b-text--bold b-text--size-largest b-team-panel__header-text"
                         dangerouslySetInnerHTML={{__html: TextStore.getText(config.highlight)}}></div>
                </div>
            </Waypoint>
        );
    }

    renderFooter(config) {
        return (
            <Waypoint
                scrollableAncestor={window}
                onEnter={this.handleWayPointEnter}
            >
                <div className={`b-team-panel__container b-team-panel__container--footer b-box--orange-bg
                                ${this.state.enteredWayPoint === true ? 'animated zoomIn b-animate__duration--fast' :
                                    'b-component--invisible'}`}>
                    <h3 className="b-title--h3 b-team-panel__footer-title b-text--color-white">
                        {Helpers.stripHtml(TextStore.getText(config.title))}
                    </h3>
                    <p className="b-text b-text--size-largest b-text--color-white">
                        {Helpers.stripHtml(TextStore.getText(config.subtitle))}
                    </p>
                    <div className="b-team-panel__highlight b-text b-text--size-larger"
                         dangerouslySetInnerHTML={{__html: TextStore.getText(config.bodyText)}}></div>
                    <a href={`mailto: ${Helpers.stripHtml(TextStore.getText(config.email))}`}
                        className="b-link b-link--block">
                        <span className="b-link__text b-text--color-dark">
                            {Helpers.stripHtml(TextStore.getText(config.email))}
                        </span>
                    </a>
                    <p>{Helpers.stripHtml(TextStore.getText(config.phone))}</p>
                </div>
            </Waypoint>

        );
    }

}

TeamPanel.propTypes = propTypes;

export default TeamPanel;
