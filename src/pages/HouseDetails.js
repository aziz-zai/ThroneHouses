import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GotApi from "../api/GotApi";
import "./HouseDetails";

function HouseDetails() {
  let { houseName } = useParams();
  const [house, setHouse] = useState();

  const getHouseByName = () => {
    GotApi.getAPI()
      .getHouseByName(houseName)
      .then((listOfHouses) => setHouse(listOfHouses[0]))
      .catch((e) => console.log("error", e));
  };
  useEffect(() => {
    getHouseByName();
  }, []);
  return (
    <div className="detailContainers">
      <h1 className="detailHouseTitle">{houseName}</h1>
      <div className="detailHouseBody"></div>
    </div>
  );
}

export default HouseDetails;
