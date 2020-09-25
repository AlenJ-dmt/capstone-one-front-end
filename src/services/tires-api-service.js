import config from "../config";

const TiresApiService = {
  getTireParameters() {
    return fetch(`${config.API_ENDPOINT}/tires`)
      .then((res) => res.json())
  },
};
//     //   ? console.log("error") /*res.json().then((e) => Promise.reject(e))*/
//     //   : console.log('true')

export default TiresApiService;
