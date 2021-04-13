import axios from 'axios'

class AirportService {
    
    getAirports(inputs) {
        const REST_API_URL = "http://localhost:8080/Project/AirportAPI/";
        const request = "getAirports?";
        
        const method = "departure";
        const airport = inputs.departureAirport;
        const minDistance = inputs.minRange;
        const maxDistance = inputs.maxRange;
        const allowsSmall = Boolean(inputs.allowsSmallAirports);
        const allowsMed = Boolean(inputs.allowsMediumAirports);
        const allowsLarge = Boolean(inputs.allowsLargeAirports);

        var airportSize = "";
        if (allowsSmall) airportSize += "S";
        if (allowsMed) airportSize += "M";
        if (allowsLarge) airportSize += "L"
        
        const completeURL = REST_API_URL + request 
                        + "method=" + method 
                        + "&airportName=" + airport
                        + "&minRange=" + minDistance
                        + "&maxRange=" + maxDistance
                        + "&airportSize=" + airportSize;

        const result = axios.get(completeURL);
        return result
    }
}

export default new AirportService()
