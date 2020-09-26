import config from "../config";

const TiresApiService = {
  getTireParameters() {
    return fetch(`${config.API_ENDPOINT}/tires`).then((res) => res.json());
  },
  getAllTires() {
    return fetch(`${config.API_ENDPOINT}/tires/all`).then((res) => res.json());
  },
  getTiresBySize(size, condition) {
    return fetch(
      `${config.API_ENDPOINT}/tires/search?size=${size}&condition=${condition}`
    ).then((res) => res.json());
  },
};

export default TiresApiService;
