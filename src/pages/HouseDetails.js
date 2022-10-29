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
    }
    if (house.heir !== "") {
      getHeir(house.heir);
    }
    if (house.founder !== "") {
      getFounder(house.founder);
    }
    if (house.cadetBranches.length > 0) {
      house.cadetBranches.map((url) => getCadetBranches(url));
    }
    if (house.swornMembers.length > 0) {
      house.swornMembers.map((url) => getSwornMembers(url));
    }
  };

  useEffect(() => {
    getHouseByName();
  }, []);

  const slicedArray = (array) => array.slice(0, 10);

  return (
    <div className="detailContainer">
      <div className="homeBackground">
        <img src={background}></img>
      </div>
      <div className="detailHouseBody">
        <div className="detailHouseTitle">{houseName}</div>

        <div className="houseAttributeWrapper">
          <div className="houseAttributeContainer">
            <div className="houseAttributeKey">Region</div>
            <div className="houseAttributeValue">
              &nbsp;
              {house ? house.region : "Unknown"}
            </div>
          </div>
          <div className="houseAttributeContainer">
            <div className="houseAttributeKey">Coat of arms</div>
            <div className="houseAttributeValue">
              &nbsp;
              {house
                ? house.coatOfArms == ""
                  ? "Unknown"
                  : house.coatOfArms
                : "Unknown"}
            </div>
          </div>
          <div className="houseAttributeContainer">
            <div className="houseAttributeKey"> Words</div>
            <div className="houseAttributeValue">
              &nbsp;
              {house
                ? house.words == ""
                  ? "Unknown"
                  : house.words
                : "Unknown"}
            </div>
          </div>
          <div className="houseAttributeContainer">
            <div className="houseAttributeKey">Titles</div>
            <div className="houseAttributeValue">
              &nbsp;
              {house
                ? house.titles == ""
                  ? "Unknown"
                  : slicedArray(house.titles).map((title) => (
                      <div> {title} </div>
                    ))
                : "Unknown"}
            </div>
          </div>
          <div className="houseAttributeContainer">
            <div className="houseAttributeKey">Seats</div>
            <div className="houseAttributeValue">
              &nbsp;
              {house
                ? house.seats == ""
                  ? "Unknown"
                  : slicedArray(house.seats).map((seats) => (
                      <div> {seats} </div>
                    ))
                : "Unknown"}
            </div>
          </div>
          <div className="houseAttributeContainer">
            <div className="houseAttributeKey">Current lord</div>
            <div className="houseAttributeValue">
              &nbsp;
              {currentLord ? currentLord : "Unknown"}
            </div>
          </div>
          <div className="houseAttributeContainer">
            <div className="houseAttributeKey">Heir</div>
            <div className="houseAttributeValue">
              &nbsp;
              {heir ? heir : "Unknown"}
            </div>
          </div>
          <div className="houseAttributeContainer">
            <div className="houseAttributeKey">Overlord</div>
            <div className="houseAttributeValue">
              &nbsp;
              {overlord ? overlord : "Unknown"}
            </div>
          </div>
          <div className="houseAttributeContainer">
            <div className="houseAttributeKey">Founded</div>
            <div className="houseAttributeValue">
              &nbsp;
              {house
                ? house.founded == ""
                  ? "Unknown"
                  : house.founded
                : "Unknown"}
            </div>
          </div>
          <div className="houseAttributeContainer">
            <div className="houseAttributeKey">Founder</div>
            <div className="houseAttributeValue">
              &nbsp;
              {founder ? founder : "Unknown"}
            </div>
          </div>
          <div className="houseAttributeContainer">
            <div className="houseAttributeKey">Ancestral weapons</div>
            <div className="houseAttributeValue">
              &nbsp;
              {house
                ? house.ancestralWeapons == ""
                  ? "Unknown"
                  : slicedArray(house.ancestralWeapons).map(
                      (ancestralWeapons) => <div> {ancestralWeapons} </div>
                    )
                : "Unknown"}
            </div>
          </div>
          <div className="houseAttributeContainer">
            <div className="houseAttributeKey">Cadet branches</div>
            <div className="houseAttributeValue">
              &nbsp;
              {cadetBranches.length > 0
                ? slicedArray(cadetBranches).map((cadetBranches) => (
                    <div> {cadetBranches} </div>
                  ))
                : "Unknown"}
            </div>
          </div>
          <div className="houseAttributeContainer">
            <div className="houseAttributeKey">Sworn members</div>
            <div className="houseAttributeValue">
              {swornMembers.length > 0
                ? slicedArray(swornMembers).map((swornMembers) => (
                    <div> {swornMembers} </div>
                  ))
                : "Unknown"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseDetails;
