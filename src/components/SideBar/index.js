import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

export class SideBar extends Component {
  constructor(props) {
    super(props);

    // Init the state
    this.state = {};
  }

  handleOpenStateChange = () => {
    this.props.toggle();
  };

  render() {
    return (
      <>
        <div className={this.props.Open}>
          <div className="SideBarIcon" onClick={this.handleOpenStateChange}>
            <CloseIcon />
          </div>
          <div className="SideBarWrapper">
            <div className="SideBarMenu">
              <Link
                to="/MeineProjekte"
                onClick={this.handleOpenStateChange}
                className="SideBarLink"
              >
                Projekte
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

SideBar.propTypes = {
  toggle: PropTypes.any,
  Open: PropTypes.any,
};

export default SideBar;
