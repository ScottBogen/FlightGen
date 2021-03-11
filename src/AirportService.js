import axios from 'axios'

const REST_API_URL = "http://localhost:8080/Project/AirportAPI/"

class AirportService {

    getAirports() {
        var airports = axios.get(REST_API_URL + 'getAirports')
        console.log(airports)
        return airports
    }
}

export default new AirportService()
