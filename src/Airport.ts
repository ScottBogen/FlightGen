class Airport {
    airportId: number = 0;
    ident: string = "";
    airportType: string = "";
    // airportName: string;
    // latitudeDeg: number;
    // longitudeDeg: number;
    // elevation: number;
    // continent: string;
    // isoCountry: string;
    // isoRegion: string;
    // municipality: string;
    // scheduledService: string;
    // gpsCode: string;
    // iataCode: string;
    // localCode: string;
    // homeLink: string;
    // wikipediaLink: string;
    // keywords: string;

    // constructor(airportId: number, ident: string, airportType: string, airportName:, latitudeDeg,
    //     longitudeDeg, elevation, continent, isoCountry, isoRegion,
    //     municipality, scheduledService, gpsCode, iataCode, localCode,
    //     homeLink, wikipediaLink, keywords) {
    //     this.airportId = airportId;
    //     this.ident = ident;
    //     this.airportType = airportType;
    //     this.airportName = airportName;
    //     this.latitudeDeg = latitudeDeg;
    //     this.longitudeDeg = longitudeDeg;
    //     this.elevation = elevation;
    //     this.continent = continent;
    //     this.isoCountry = isoCountry;
    //     this.isoRegion = isoRegion;
    //     this.municipality = municipality;
    //     this.scheduledService = scheduledService;
    //     this.gpsCode = gpsCode;
    //     this.iataCode = iataCode;
    //     this.localCode = localCode;
    //     this.homeLink = homeLink;
    //     this.wikipediaLink = wikipediaLink;
    //     this.keywords = keywords;
    // }


    constructor(airportId: number, ident: string, airportType: string) {
        this.airportId = airportId;
        this.ident = ident;
        this.airportType = airportType;
    }
}

export default Airport