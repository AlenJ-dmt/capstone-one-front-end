import config from "../config";

const WheelsApiService = {
  getWheelParameters() {
    return fetch(`${config.API_ENDPOINT}/api/wheels`).then((res) => res.json());
  },
  getAllWheels() {
    return fetch(`${config.API_ENDPOINT}/api/wheels/all`).then((res) =>
      res.json()
    );
  },
  searchOemWheel(year, make, model) {
    return fetch(
      `${config.API_ENDPOINT}/api/wheels/searchOem?year=${year}&make=${make}&model=${model}`
    ).then((wheels) => {
      wheels.json();
    });
  },
};

export default WheelsApiService;
