'use strict';

import React from 'react';
import PopupActions from '../../actions/popupActions';
import PopupStore from '../../stores/popupStore';

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: null
        };
        this.onShow = this.onShow.bind(this);
        this.close = this.close.bind(this);
    }

    //----------- Component mount states -------
    componentWillMount() {
        this.unsubscribePopupStore = PopupStore.listen(this.onShow);
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        this.unsubscribePopupStore();
    }

    onShow(data) {
        if(data.action === "show") {
            this.setState({
                content: data.data
            });
        }

    }

    close() {
        this.setState({ content: null });
    }

    render() {
        return (
            <div className={`b-popup b-container
                        ${this.props.className || '' }
                        ${this.state.content ? 'b-popup--show' : ''
                }`}>



                <div className="b-container__wrapper ">
                    <div className="b-popup__container b-box--orange-bg b-position__container">

                        <a href="javascript:void(0);"
                           className={`b-link b-popup__button-close`}
                           onClick={this.close}>
                            <span className="b-icon b-icon--close b-link__text b-text--color-dark
                                            b-text--size-larger"></span>
                        </a>

                        {this.renderContent()}

                        <a href="javascript:void(0);"
                           className={`b-link b-popup__button-close`}
                           onClick={this.close}>
                            <span className="b-icon b-icon--close b-link__text b-text--color-dark
                                            b-text--size-larger"></span>
                        </a>

                    </div>
                </div>



            </div>
        );
    }

    renderContent() {
        if(this.state.content === null) {
            return <div ></div>
        }

        return (
            <div className="b-popup__content">
                {this.state.content.props.children}
            </div>
        )

    }

}

export default Popup;
