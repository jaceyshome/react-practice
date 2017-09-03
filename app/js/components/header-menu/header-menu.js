'use strict';

import React                from 'react';
import RedirectLink         from '../redirect-link/redirect-link';

import StructureStore       from '../../stores/structureStore';
import TextStore            from '../../stores/textStore';
import RouteStore           from '../../stores/routeStore';
import RouteActions         from '../../actions/routeActions';
import _                    from 'lodash';
import Helpers              from '../../utils/helpers';

const propTypes = {};

class HeaderMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentList: null,
            menuList: null,
            projectList: null
        };
        this.closeDropdownList = this.closeDropdownList.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.showProjects = this.showProjects.bind(this);
        this.onRouteChange = this.onRouteChange.bind(this);
    }


    //--------------------- mount steps -------------
    componentWillMount() {
        this.unsubscribeRouteStore = RouteStore.listen(this.onRouteChange);
        this.setState({ menuList: this.buildMenuList() });
        this.setState({ projectList: this.buildProjectsList() });
    }

    componentWillUnmount() {
        this.unsubscribeRouteStore();
    }

    buildMenuList() {
        return _.map(StructureStore.listPageNavigationTitles(), (navigationTitle, key)=> {
            return ({
                name: navigationTitle,
                link : `/${navigationTitle}`
            });
        });
    }

    buildProjectsList() {
        return _.map(StructureStore.listProjects(), (project, key)=> {
            return ({
                name : Helpers.stripHtml(TextStore.getText(project.title)),
                link : `project/${Helpers.stripHtml(TextStore.getText(project.navigationTitle))}`
            });
        });
    }

    //-------------------- event handlers ---------------
    showMenu() {
        this.setState({ currentList: this.state.menuList });
    }

    showProjects( ) {
        this.setState({ currentList: this.state.projectList });
    }

    closeDropdownList() {
        this.setState({ currentList: null });
    }

    onRouteChange(e) {
        this.closeDropdownList();
    }


    //-------------------- render view -------------------
    render() {

        return (
            <div className={`b-header-menu ${this.props.className} ${this.getHeaderMenuState()}`}>
                <div className="b-header-menu__button-group">

                    <a href="javascript:void(0);"
                       className={`b-link b-header-menu__button b-header-menu__button--close`}
                       onClick={this.closeDropdownList}>
                        <span className="b-icon b-icon--close b-link__text"></span>
                    </a>

                    <a href="javascript:void(0);"
                       className={`b-link b-header-menu__button b-text--upper ${this.getMenuButtonState()}`}
                       onClick={this.showMenu} ><span className="b-link__text">Menu</span></a>

                    <a href="javascript:void(0);"
                       className={`b-link b-header-menu__button b-text--upper ${this.getProjectButtonState()}`}
                       onClick={this.showProjects}><span className="b-link__text">Projects</span>
                    </a>
                </div>

                <ul className="b-header-menu__list b-list b-header-menu__list-item b-scrollbar--straight-dark">
                    {this.renderMenuList()}
                </ul>
                <div className="b-clip-path--header-menu-bottom b-header-menu__bottom-shape"></div>
            </div>
        );
    }


    //-------------------- view helpers -------------------
    getMenuButtonState() {
        return this.state.currentList === this.state.menuList ? "b-header-menu__button--activated" : "";
    }

    getProjectButtonState() {
        return this.state.currentList === this.state.projectList ? "b-header-menu__button--activated" : "";
    }

    getHeaderMenuState() {
        return this.state.currentList === null ? "" : "b-header-menu--open";
    }

    renderMenuList() {
        if( !_.isEmpty(this.state.currentList) ) {
            return _.map(this.state.currentList, (item, key)=> {
                return (
                    <li key={Helpers.random(8)} className="b-list__item b-header-menu__list-item">
                        <RedirectLink className={this.getListClassNames()} to={item.link} >
                            <span className="b-link__text">{item.name}</span>
                        </RedirectLink>
                    </li> );
            });
        } else {
            return <div></div>;
        }
    }

    getListClassNames() {
        return this.getMenuListDefaultClassNames(this.getCurrentListClassNames());
    }

    getMenuListDefaultClassNames(name) {
        return `b-link b-text--color-dark b-link--featured ${ name || ''}`;
    }

    getCurrentListClassNames() {
        return this.state.currentList === null ? ''
            : this.state.currentList === this.state.projectList ? this.getProjectListClassNames()
            : this.state.currentList === this.state.menuList ? this.getMenuListClassNames()
            :  '';
    }

    getProjectListClassNames(name) {
        return name;
    }

    getMenuListClassNames(name) {
        return `b-text--upper ${ name || ''}`;
    }


}

HeaderMenu.propTypes = propTypes;

export default HeaderMenu;
