import config from '../config'

const WheelsApiService ={ 
    getOemWheelParameters () {
        return fetch(`${config.API_ENDPOINT}/oemWheels?mode=search`)
        .then((res) => res.json())
    }
}

export default WheelsApiService