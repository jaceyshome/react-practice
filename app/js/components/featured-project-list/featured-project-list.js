'use strict';

import React                from 'react';
import TextStore            from '../../stores/textStore';
import TextActions          from '../../actions/textActions';
import Helpers              from '../../utils/helpers';
import _                    from 'lodash';
import FeaturedProject      from '../featured-project/featured-project';

const propTypes = {
    config: React.PropTypes.object
};

class FeaturedProjectList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="b-featured-project-list grid grid--flush">

                <div className="1/2--handheld-and-up 1/2--lap 1/2--desk grid__cell
                b-featured-project-list__column b-featured-project-list__column--left ">
                    {this.renderProjects(this.props.config.left)}
                </div>

                <div className="1/2--handheld-and-up 1/2--lap 1/2--desk grid__cell
                b-featured-project-list__column b-featured-project-list__column--right">
                    {this.renderProjects(this.props.config.right)}
                </div>
            </div>
        );
    }

    renderProjects(projects) {
        return _.map(projects, (project, index)=>{
            return (
                <FeaturedProject
                    toPage="project"
                    key={Helpers.random(8)}
                    navigationTitle={Helpers.stripHtml(TextStore.getText(project.navigationTitle))}
                    title={Helpers.stripHtml(TextStore.getText(project.title))}
                    image={Helpers.stripHtml(TextStore.getText(project.image))}
                    text={TextStore.getText(project.text)}
                    displayMode={project.displayMode}
                    animationDelay={`b-animate__delay--${Helpers.getAnimationDelayByIndex(index+1)}ms`}
                />
            )
        })
    }

}

FeaturedProjectList.propTypes = propTypes;

export default FeaturedProjectList;
