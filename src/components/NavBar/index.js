import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export class NavBar extends Component {
  handleOpenStateChange = () => {
    this.props.toggle();
  };
  render() {
    const { scrollNav } = this.props;
    return (
      <div className={scrollNav ? "navBlack" : "navTrans"}>
        <div className="navContainer">
          <Link to="/" className="navLink">
            <div className="navTitle">House Of Throne</div>
          </Link>
          <ul className="navMenu">
            <li className="navItem">
              <Link to="/MeineProjekte" className="navLink">
                <SearchIcon fontSize="large" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  scrollNav: PropTypes.any,
};

export default NavBar;
