import { UTurnLeft } from "@mui/icons-material";

export default class GotApi {
  // Singelton instance
  static #api = null;

  // Backend URL
  #OneServerBaseURL = "https://anapioficeandfire.com/api";

  //House related
  #getAllHouses = (page) =>
    `${this.#OneServerBaseURL}/houses?page=${page}&pageSize=15`;
  #getHouseByName = (houseName) =>
    `${this.#OneServerBaseURL}/houses?name=${houseName}`;
  #getAttributesForHouse = (attributeURL) => `${attributeURL}`;

  /**
   * Get the Singelton instance
   *
   * @public
   */
  static getAPI() {
    if (this.#api == null) {
      this.#api = new GotApi();
    }
    return this.#api;
  }

  /**
   *  Returns a Promise which resolves to a json object.
   *  The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500.
   *  fetchAdvanced throws an Error also an server status errors
   */
  #fetchAdvanced = (url, init) =>
    fetch(url, init).then((res) => {
      if (!res.ok) {
        throw Error(`${res.status} ${res.statusText}`);
      }
      return res.json();
    });

  /**
   * User related
   */

  getAllHouses(page) {
    return this.#fetchAdvanced(this.#getAllHouses(page)).then(
      (responseJSON) => {
        return new Promise(function (resolve) {
          resolve(responseJSON);
        });
      }
    );
  }

  getHouseByName(houseName) {
    return this.#fetchAdvanced(this.#getHouseByName(houseName)).then(
      (responseJSON) => {
        return new Promise(function (resolve) {
          resolve(responseJSON);
        });
      }
    );
  }

  getAttributesForHouse(attributeURL) {
    return this.#fetchAdvanced(this.#getAttributesForHouse(attributeURL)).then(
      (responseJSON) => {
        return new Promise(function (resolve) {
          resolve(responseJSON);
        });
      }
    );
  }
}
