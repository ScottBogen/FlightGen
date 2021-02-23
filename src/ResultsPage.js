import React from "react"
import Airport from './Airport'
import airports from './AirportList'

class ResultsPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state  = {
            error: null,
            resultReceived: false,
            airportItems: []
        }

        this.receiveAirports = this.receiveAirports.bind(this);
    }

    receiveAirports() {
        this.state.airportItems = airports;
    }

    render() {
        return ( 
            <div>
                <p> Hello world </p>
                <p> Airports: </p>
                {this.state.airportItems.length}
                <div>
                <button onClick={this.receiveAirports}></button>
                </div>
            </div>
        )
    }

}

export default ResultsPage
