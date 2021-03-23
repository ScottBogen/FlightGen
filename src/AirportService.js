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
        // the airport has to be S||M||L as a requirement to send, so don't worry for now about the string being empty
        
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


/* 

HTTP GET request params:

    Method: ["arrival"],["departure"],["random"]
    Airport: [any String]
    MinRange: [any number]
    MaxRange: [any number]
    AllowsSmall: [Boolean]
    AllowsMed: [Boolean]
    AllowsLarge: [Boolean]

*/