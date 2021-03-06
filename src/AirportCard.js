import React from 'react'

class AirportCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            airport: 'Seattle',
            city:'Seattle, WA-US',
            iata: 'SEA',
            icao: 'KSEA',
            elevation: '633'
        }
    }    
    render() {
        return(
            <div>
                <p> Airport: {this.state.airport} </p>
                <p> City: {this.state.city}</p>
                <p> IATA: {this.state.iata}</p>
                <p> ICAO: {this.state.icao}</p>
                <p> Elevation: {this.state.elevation}</p>
            </div>
        )
    }

}

export default AirportCard