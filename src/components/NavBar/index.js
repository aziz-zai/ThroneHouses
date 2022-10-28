import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import title from "../../media/title.png";
import "./NavBar.css";

export class NavBar extends Component {
  handleOpenStateChange = () => {
    this.props.toggle();
  };
  render() {
    const { user, dbuser, toggle } = this.props;
    return (
      <div className="navWrapper">
        <div className="navContainer">
          <Link to="/MeinProfil" className="navLink">
            <div className="navTitle">House Of Throne</div>
          </Link>
          <ul className="navMenu">
            <li className="navItem">
              <Link to="/MeineProjekte" className="navLink">
                <SearchIcon />
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
