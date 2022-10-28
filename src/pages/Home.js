import LinearProgress from "@mui/material/LinearProgress";
import React, { Component } from "react";
import ReactPaginate from "react-paginate";
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
    };
  }
  loadAllHouses = (pageNumber) => {
    GotApi.getAPI()
      .getAllHouses(pageNumber)
      .then((listOfHouses) =>
        this.setState({
          listOfHouses: listOfHouses,
        })
      )
      .catch((e) => console.log("error", e));
  };

  changePage = ({ selected }) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.loadAllHouses(selected + 1);
  };

  componentDidMount() {
    this.loadAllHouses(1);
  }
  render() {
    return (
      <div className="homeContainer">
        <div className="homeBackground">
          <img src={background}></img>
        </div>
        <div className="homeBody">
          <div className="CardWrapper">
            {this.state.listOfHouses.map((house) => (
              <Card key={house.url} houseName={house.name} />
            ))}
          </div>
        </div>
        <div className="paginationWrapper">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={31}
            onPageChange={this.changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    );
  }
}

export default Home;
