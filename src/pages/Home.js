import React, { Component } from "react";
import GotApi from "../api/GotApi";
import background from "../media/background.jpeg";
import "./Home.css";

export class Home extends Component {
  constructor(props) {
    super(props);
    // Init the state
    this.state = {
      listOfHouses: [],
      loading: false,
    };
  }
  loadAllHouses = () => {
    GotApi.getAPI()
      .getAllHouses()
      .then((listOfHouses) =>
        this.setState({
          listOfHouses: listOfHouses,
          loading: false,
        })
      )
      .catch((e) =>
        this.setState({
          // Reset state with error from catch
          loading: false,
        })
      );
    // set loading to true
    this.setState({
      loading: true,
    });
  };
  componentDidMount() {
    this.loadAllHouses();
  }
  render() {
    return (
      <div className="homeContainer">
        <div className="homeBackground">
          <img className="homeVideo" src={background}></img>
        </div>
        <div>Home</div>
        <div>
          {this.state.listOfHouses.map((house) => (
            <h1>{house.name}</h1>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;