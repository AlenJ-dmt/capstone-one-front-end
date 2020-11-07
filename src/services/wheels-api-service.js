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
    ).then((wheels) => wheels.json());
  },
  addOemWheel(
    make,
    model,
    car_year,
    wheel_width,
    wheel_diameter,
    bolt_pattern,
    quantity
  ) {
    return fetch(`${config.API_ENDPOINT}/api/wheels/addOemWheel`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        make,
        model,
        car_year,
        wheel_width,
        wheel_diameter,
        bolt_pattern,
        quantity,
      }),
    });
  },
};

export default WheelsApiService;
