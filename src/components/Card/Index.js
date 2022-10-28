import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Card.css";

export class Card extends Component {
  constructor(props) {
    super(props);

    // Init the state
    this.state = {};
  }
  removeFirstWord(str) {
    const indexOfSpace = str.indexOf(" ");

    if (indexOfSpace === -1) {
      return "";
    }

    return str.substring(indexOfSpace + 1);
  }

  render() {
    const { houseName } = this.props;
    return (
      <div className="houseCard">
        <div className="housePreTitle">House</div>
        <div className="houseTitle">{this.removeFirstWord(houseName)}</div>
      </div>
    );
  }
}

Card.propTypes = {
  houseName: PropTypes.string,
};

export default Card;
