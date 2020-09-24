import config from "../config";

const TiresApiService = {
  getTiresSize() {
    return fetch(`${config.API_ENDPOINT}/tires?mode=search`)
      .then((res) => res.json())
  },
};
//     //   ? console.log("error") /*res.json().then((e) => Promise.reject(e))*/
//     //   : console.log('true')

export default TiresApiService;
