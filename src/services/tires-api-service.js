import config from "../config";
import React from 'react'

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
  addNewTire(brand, size, quantity, condition){
    return fetch(`${config.API_ENDPOINT}/tires/addTire`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        brand,
        size,
        quantity,
        condition
      })
    })
  }
};

export default TiresApiService;
