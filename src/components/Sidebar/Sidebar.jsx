import React, { useState } from "react";
import "../Sidebar/Sidebar.css";

import { Link, NavLink as NavLinkRRD, } from "react-router-dom";
import { PropTypes } from "prop-types";
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import {
	Container,
} from "reactstrap";

const Sidebar = (props) => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

  const [collapseOpen, setCollapseOpen] = useState();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
  	return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  // closes the collapse
  const closeCollapse = () => {
  	setCollapseOpen(false);
  };

  const createLinks = (routes) => {
  	return routes.map((prop, key) => {
  		if (prop.invisible === true) return null;
  		if (props.location.pathname.indexOf(prop.layout) === -1) return null;
  		return (
  			<li key={key} className='nav-text'>
  				<Link
  					// className="text-primary"
  					to={prop.layout + prop.path}
  					tag={NavLinkRRD}
  					onClick={closeCollapse}
  					activeClassName="active"
  					// activeClassName="fw-bold"
  				>
  					{/* <i className={prop.icon} /> */}
  					<span>{prop.name}</span>
  				</Link>
  			</li>
  		);
  	});
  };

  const { routes, logo } = props;

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <div >{createLinks(routes)}</div>
          </ul>
        </nav>

      </IconContext.Provider>
    </>
  )
};

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
