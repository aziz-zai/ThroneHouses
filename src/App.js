import React, { Component } from "react";
import { Navigate } from "react-router";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

export class App extends Component {
  constructor(props) {
    super(props);

    // Init the state
    this.state = {
      Open: "SideBarContainerClosed",
    };
  }

  handleOpenStateChange = () => {
    if (this.state.Open == "SideBarContainerOpen") {
      this.setState({
        Open: "SideBarContainerClosed",
      });
    }
    if (this.state.Open == "SideBarContainerClosed") {
      this.setState({
        Open: "SideBarContainerOpen",
      });
    }
  };
  render() {
    return (
      <>
        <Router>
          <SideBar toggle={this.handleOpenStateChange} Open={this.state.Open} />
          <NavBar toggle={this.handleOpenStateChange} />
        </Router>
      </>
    );
  }
}

export default App;
