import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export class NavBar extends Component {
  handleOpenStateChange = () => {
    this.props.toggle();
  };
  render() {
    const { user, dbuser, toggle } = this.props;
    return (
      <div className="navBlack">
        <div className="navContainer">
          <Link to="/MeinProfil" className="navLink">
            <div className="navLogo">HouseOfThrones</div>
          </Link>
          <div className="navMobile" onClick={this.handleOpenStateChange}>
            <MenuIcon />
          </div>
          <ul className="navMenu">
            <li className="navItem">
              <Link to="/MeineProjekte" className="navLink">
                Projekte
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  toggle: PropTypes.any,
};

export default NavBar;
