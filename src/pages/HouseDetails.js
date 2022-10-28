import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GotApi from "../api/GotApi";
import "./HouseDetails";

function HouseDetails() {
  let { houseName } = useParams();
  const [house, setHouse] = useState();
  const [currentLord, setCurrentLord] = useState();
  const [heir, setHeir] = useState();
  const [overlord, setOverlord] = useState();
  const [founder, setFounder] = useState();
  const [cadetBranches, setCadetBranches] = useState();
  const [swornMembers, setSwornMembers] = useState();

  const getHouseByName = () => {
    GotApi.getAPI()
      .getHouseByName(houseName)
      .then((resp) => {
        setHouse(resp[0]);
        return resp[0];
      })
      .then((resp) => getHouseAttributes(resp));
  };

  const getCurrentLord = (currentLordURL) => {
    GotApi.getAPI()
      .getAttributesForHouse(currentLordURL)
      .then((resp) => setCurrentLord(resp[0]));
  };
  const getHeir = (heirURL) => {
    GotApi.getAPI()
      .getAttributesForHouse(heirURL)
      .then((resp) => setHeir(resp[0]));
  };
  const getOverLord = (overLordURL) => {
    GotApi.getAPI()
      .getAttributesForHouse(overLordURL)
      .then((resp) => setOverlord(resp[0]));
  };
  const getFounder = (founderURL) => {
    GotApi.getAPI()
      .getAttributesForHouse(founderURL)
      .then((resp) => setFounder(resp[0]));
  };
  const getCadetBranches = (cadetBranchesURL) => {
    GotApi.getAPI()
      .getAttributesForHouse(cadetBranchesURL)
      .then((resp) => setCadetBranches(resp[0]));
  };
  const getSwornMembers = (swornMembersdURL) => {
    GotApi.getAPI()
      .getAttributesForHouse(swornMembersdURL)
      .then((resp) => setSwornMembers(resp[0]));
  };

  const getHouseAttributes = (house) => {
    if (house.currentLord == "") {
      return null;
    } else {
      getCurrentLord(house.currentLord);
    }
    if (house.heir == "") {
      return null;
    } else {
      getHeir(house.heir);
    }
    if (house.overlord == "") {
      return null;
    } else {
      getOverLord(house.overlord);
    }
    if (house.founder == "") {
      return null;
    } else {
      getFounder(house.founder);
    }
    if (house.cadetBranches == "") {
      return null;
    } else {
      getCadetBranches(house.cadetBranches);
    }
    if (house.swornMembers == "") {
      return null;
    } else {
      getSwornMembers(house.swornMembers);
    }
  };

  useEffect(() => {
    getHouseByName();
  }, []);
  return (
    <div className="detailContainer">
      <h1 className="detailHouseTitle">{houseName}</h1>
      <div className="detailHouseBody">
        <p className="houseAttribute">
          Region:{house ? house.region : "Unknown"}
        </p>
        <p className="houseAttribute">
          Coat of arms:
          {house
            ? house.coatOfArms == ""
              ? "Unknown"
              : house.coatOfArms
            : "Unknown"}
        </p>
        <p className="houseAttribute">
          Words:
          {house ? (house.words == "" ? "Unknown" : house.words) : "Unknown"}
        </p>
        <p className="houseAttribute">
          Titles:
          {house ? (house.titles == "" ? "Unknown" : house.words) : "Unknown"}
        </p>
        <p className="houseAttribute">
          Seats:
          {house ? (house.seats == "" ? "Unknown" : house.seats) : "Unknown"}
        </p>
        <p className="houseAttribute">
          Current lord:{currentLord ? currentLord.name : "Unknown"}
        </p>
        <p className="houseAttribute">Heir:{heir ? heir.name : "Unknown"}</p>
        <p className="houseAttribute">
          Overlord:{overlord ? overlord.name : "Unknown"}
        </p>
        <p className="houseAttribute">
          Founded:
          {house
            ? house.founded == ""
              ? "Unknown"
              : house.founded
            : "Unknown"}
        </p>
        <p className="houseAttribute">
          Founder:{founder ? founder.name : "Unknown"}
        </p>
        <p className="houseAttribute">
          Ancestral weapons:
          {house
            ? house.ancestralWeapons == ""
              ? "Unknown"
              : house.ancestralWeapons
            : "Unknown"}
        </p>
        <p className="houseAttribute">
          Cadet branches:{cadetBranches ? cadetBranches.name : "Unknown"}
        </p>
        <p className="houseAttribute">
          Sworn members:{swornMembers ? swornMembers.name : "Unknown"}
        </p>
      </div>
    </div>
  );
}

export default HouseDetails;
