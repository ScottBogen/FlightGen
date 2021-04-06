import React from 'react'
import { Card } from 'react-bootstrap'

class AirportCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = { }
    }    

    formatAirportType(size) {
        switch (size) {
            case 'small_airport':
                return 'Small'

            case 'medium_airport':
                return 'Medium'
            
            case 'large_airport':
                return 'Large'
            default:
                return size;
        }
    }

    render() {

        var airport = this.props.info;

        return(
            <div>
                <Card>
                    <Card.Title>{airport.airportName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{airport.municipality}</Card.Subtitle>
                    <Card.Text>
                        <p>Size: {this.formatAirportType(airport.airportType)}</p>
                        <p>Elevation: {airport.elevation}'</p>
                    </Card.Text>
                    <Card.Link href={airport.homelink} >Website</Card.Link>
                    <Card.Link href={airport.wikipedia}>Wikipedia</Card.Link>
                </Card>
            </div>
        )
    }
}

export default AirportCard