import React, { Component } from "react";
import GotApi from "../api/GotApi";
import Card from "../components/Card/Index";
import background from "../media/background.jpeg";
import "./Home.css";

export class Home extends Component {
  constructor(props) {
    super(props);
    // Init the state
    this.state = {
      listOfHouses: [],
      loading: false,
      pageNumber: 1,
    };
  }
  loadAllHouses = () => {
    GotApi.getAPI()
      .getAllHouses(this.state.pageNumber)
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
          <img src={background}></img>
        </div>
        <div className="CardWrapper">
          {this.state.listOfHouses.map((house) => (
            <Card houseName={house.name} />
          ))}
        </div>
        <div className="paginationWrapper"></div>
      </div>
    );
  }
}

export default Home;
