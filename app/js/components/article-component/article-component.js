'use strict';

import React                from 'react';
import Helpers              from '../../utils/helpers';
import TextStore            from '../../stores/textStore';

const propTypes = {
    titleId: React.PropTypes.string,
    contentId: React.PropTypes.string
};

const ArticleComponent = (props)=> {

    if(props.contentId.includes("image")) {
        return (

            <img src="images/0.gif"
                className={`b-image b-image--ratio-4-3
                           ${ props.displayMode === 'vertical' ?
                            'b-image--square' : 'b-image--ratio-3-2' } `}
             alt={props.alt || ''}
             style={ {backgroundImage : `url(${props.image})` } } />


        );
    } else {
        return (
            <div className="b-article-component__text" id={Helpers.random(8)}
                 dangerouslySetInnerHTML={{__html: TextStore.getText(props.contentId)}}>
            </div>
        );
    }

};

ArticleComponent.propTypes = propTypes;

export default ArticleComponent;
