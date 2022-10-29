import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
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
      houseName: "",
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
  getHouseByName = (houseName) => {
    GotApi.getAPI()
      .getHouseByName(houseName)
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

  changeValue = (event) => {
    this.setState({
      houseName: event.target.value,
    });
  };

  getSearchResults = () => {
    if (this.state.houseName === "") {
      this.loadAllHouses(1);
    } else {
      this.getHouseByName(this.state.houseName);
    }
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
          <div className="searchBar">
            <div className="searchBarContainer">
              <SearchIcon
                onClick={this.getSearchResults}
                className="searchBarIcon"
                sx={{ fontSize: 30 }}
              />
              <input
                className="searchField"
                placeholder="Name of the House"
                value={this.state.houseName}
                onChange={this.changeValue}
              />
            </div>
          </div>
          <div className="CardWrapper">
            {this.state.listOfHouses.map((house) => (
              <Card key={house.url} houseName={house.name} url={2} />
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
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
          />
        </div>
      </div>
    );
  }
}

export default Home;
