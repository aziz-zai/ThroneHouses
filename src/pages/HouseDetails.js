import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GotApi from "../api/GotApi";
import background from "../media/background.jpeg";
import "./HouseDetails.css";

function HouseDetails() {
  let { houseName } = useParams();
  const [house, setHouse] = useState();
  const [currentLord, setCurrentLord] = useState();
  const [heir, setHeir] = useState();
  const [overlord, setOverlord] = useState();
  const [founder, setFounder] = useState();
  const [cadetBranches, setCadetBranches] = useState([]);
  const [swornMembers, setSwornMembers] = useState([]);

  const addCadetBranch = (cadetBranch) => {
    cadetBranches.push(cadetBranch);
  };
  const addSwornMembers = (swornMember) => {
    swornMembers.push(swornMember);
  };

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
      .then((resp) => setCurrentLord(resp.name));
  };
  const getHeir = (heirURL) => {
    GotApi.getAPI()
      .getAttributesForHouse(heirURL)
      .then((resp) => setHeir(resp.name));
  };
  const getOverLord = (overLordURL) => {
    GotApi.getAPI()
      .getAttributesForHouse(overLordURL)
      .then((resp) => setOverlord(resp.name));
  };
  const getFounder = (founderURL) => {
    GotApi.getAPI()
      .getAttributesForHouse(founderURL)
      .then((resp) => setFounder(resp.name));
  };
  const getCadetBranches = (cadetBranchesURL) => {
    GotApi.getAPI()
      .getAttributesForHouse(cadetBranchesURL)
      .then((resp) => addCadetBranch(resp.name));
  };
  const getSwornMembers = (swornMembersdURL) => {
    GotApi.getAPI()
      .getAttributesForHouse(swornMembersdURL)
      .then((resp) => addSwornMembers(resp.name));
  };

  const getHouseAttributes = (house) => {
    if (house.overlord !== "") {
      getOverLord(house.overlord);
    }
    if (house.currentLord !== "") {
      getCurrentLord(house.currentLord);
      console.log("err2", house);
    }
    if (house.heir !== "") {
      getHeir(house.heir);
      console.log("err3", house);
    }
    if (house.founder !== "") {
      getFounder(house.founder);
      console.log("err4", house.founder);
    }
    if (house.cadetBranches.length > 0) {
      house.cadetBranches.map((url) => getCadetBranches(url));
      console.log("err5", house);
    }
    if (house.swornMembers.length > 0) {
      house.swornMembers.map((url) => getSwornMembers(url));
      console.log("err6", house);
    }
  };

  useEffect(() => {
    getHouseByName();
  }, []);
  return (
    <div className="detailContainer">
      <div className="homeBackground">
        <img src={background}></img>
      </div>
      <div className="detailHouseBody">
        <div className="detailHouseTitle">{houseName}</div>

        <div className="houseAttributeWrapper">
          <div className="houseAttribute">
            <b>Region:</b>&nbsp;
            {house ? house.region : "Unknown"}
          </div>
          <div className="houseAttribute">
            <b>Coat of arms:</b>&nbsp;
            {house
              ? house.coatOfArms == ""
                ? "Unknown"
                : house.coatOfArms
              : "Unknown"}
          </div>
          <div className="houseAttribute">
            <b> Words:</b>&nbsp;
            {house ? (house.words == "" ? "Unknown" : house.words) : "Unknown"}
          </div>
          <div className="houseAttribute">
            <b>Titles:</b>&nbsp;
            {house
              ? house.titles == ""
                ? "Unknown"
                : house.titles.map((title) => <p> {title} </p>)
              : "Unknown"}
          </div>
          <div className="houseAttribute">
            <b>Seats:</b>&nbsp;
            {house
              ? house.seats == ""
                ? "Unknown"
                : house.seats.map((seats) => <p> {seats} </p>)
              : "Unknown"}
          </div>
          <div className="houseAttribute">
            <b>Current lord:</b>&nbsp;
            {currentLord ? currentLord : "Unknown"}
          </div>
          <div className="houseAttribute">
            <b>Heir:</b>&nbsp;
            {heir ? heir : "Unknown"}
          </div>
          <div className="houseAttribute">
            <b>Overlord:</b>&nbsp;
            {overlord ? overlord : "Unknown"}
          </div>
          <div className="houseAttribute">
            <b>Founded:</b>&nbsp;
            {house
              ? house.founded == ""
                ? "Unknown"
                : house.founded
              : "Unknown"}
          </div>
          <div className="houseAttribute">
            <b>Founder:</b>&nbsp;
            {founder ? founder : "Unknown"}
          </div>
          <div className="houseAttribute">
            <b>Ancestral weapons:</b>&nbsp;
            {house
              ? house.ancestralWeapons == ""
                ? "Unknown"
                : house.ancestralWeapons.map((ancestralWeapons) => (
                    <p> {ancestralWeapons} </p>
                  ))
              : "Unknown"}
          </div>
          <div className="houseAttribute">
            <b>Cadet branches:</b>&nbsp;
            {cadetBranches.length > 0
              ? cadetBranches.map((cadetBranches) => <p> {cadetBranches} </p>)
              : "Unknown"}
          </div>
          <div className="houseAttribute">
            <b>Sworn members:</b>&nbsp;
            {swornMembers.length > 0
              ? swornMembers.map((swornMembers) => <p> {swornMembers} </p>)
              : "Unknown"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseDetails;
