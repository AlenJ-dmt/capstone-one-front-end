import config from '../config'

const WheelsApiService ={ 
    getWheelParameters () {
        return fetch(`${config.API_ENDPOINT}/wheels`)
        .then((res) => res.json())
    }
}

export default WheelsApiService