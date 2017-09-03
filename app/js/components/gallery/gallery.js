'use strict';

import React                        from 'react';
import {WindowResizeListener}     from 'react-window-resize-listener'
import TextStore                    from '../../stores/textStore';
import TextActions                  from '../../actions/textActions';
import Helpers                      from '../../utils/helpers';
import _                            from 'lodash';
import GalleryItem                  from '../../components/gallery-item/gallery-item';

const propTypes = {
    toPage: React.PropTypes.string,
    config: React.PropTypes.array,
    className: React.PropTypes.string
};

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.buildDesktopItemLists = this.buildDesktopItemLists.bind(this);
        this.buildMobileItemLists = this.buildMobileItemLists.bind(this);
        this.renderItems = this.renderItems.bind(this);
        this.currentListFn = null;
        this.state = {
            leftItems: [],
            middleItems: [],
            rightItems: []
        };
    }

    buildDesktopItemLists() {

        var leftItems = [];
        var middleItems = [];
        var rightItems = [];
        _.map(this.props.config, (item, key)=> {
            if ((key + 1) % 3 === 1) {
                leftItems.push(item);
            } else if ((key + 1) % 3 === 2) {
                middleItems.push(item);
            } else {
                rightItems.push(item);
            }
        });

        return {
            leftItems: leftItems,
            middleItems: middleItems,
            rightItems: rightItems
        } ;
    }

    buildMobileItemLists() {
        return {
            leftItems: this.props.config,
            middleItems: null,
            rightItems: null
        }
    }


    //------------------- render --------------------

    render() {
        return (
            <div className={`grid grid--center ${this.props.className}`}>

                <WindowResizeListener onResize={windowSize => {
                    if (windowSize.windowWidth > 800 &&
                         this.currentListFn !== this.buildDesktopItemLists ) {
                            this.currentListFn = this.buildDesktopItemLists;
                    } else if ( windowSize.windowWidth <= 800 &&
                         this.currentListFn !== this.buildMobileItemLists ) {
                            this.currentListFn = this.buildMobileItemLists;
                        this.currentListFn = this.buildMobileItemLists;
                    } else {
                        return ;
                    }
                    this.setState(this.currentListFn());
                }}/>

                <div className="1/3--lap 1/3--desk grid__cell">
                    {this.renderItems(this.state.leftItems)}
                </div>

                <div className="1/3--lap 1/3--desk grid__cell">
                    {this.renderItems(this.state.middleItems)}
                </div>

                <div className="1/3--lap 1/3--desk grid__cell">
                    {this.renderItems(this.state.rightItems)}
                </div>
            </div>
        );
    }

    renderItems(items) {
        if (items === null) {
            return <div></div>;
        }
        let toPage = this.props.toPage;

        return _.map(items, (item, index)=> {
            return (
                <GalleryItem
                    toPage={toPage}
                    key={Helpers.random(8)}
                    navigationTitle={`${Helpers.stripHtml(TextStore.getText(item.navigationTitle))}`}
                    title={Helpers.stripHtml(TextStore.getText(item.title))}
                    image={Helpers.stripHtml(TextStore.getText(item.image))}
                    subTitle={Helpers.stripHtml(TextStore.getText(item.subTitle))}
                    text={Helpers.stripHtml(TextStore.getText(item.text))}
                    displayMode={item.displayMode}
                    className="b-box--half-loose-top"
                    animationDelay={`b-animate__delay--${Helpers.getAnimationDelayByIndex(index+1)}ms`}
                />
            )
        })
    }

}

Gallery.propTypes = propTypes;

export default Gallery;
