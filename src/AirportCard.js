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

        console.log("Details:")
        console.log(airport.homeLink)
        console.log(airport.wikipediaLink)

        const homeLink = airport.homeLink ? 
            <Card.Link href={airport.homeLink} >Website</Card.Link> : <div> No website </div>;

        const wikiLink = airport.wikiLink ? 
            <Card.Link href={airport.wikipediaLink} >Wikipedia</Card.Link> : <div> No wiki entry</div>;

        

        return(
            <div>
                <Card>
                    <Card.Title as="h5" >{airport.airportName} ({airport.ident})</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{airport.municipality}</Card.Subtitle>
                    <Card.Text>
                        <p>
                            Size: {this.formatAirportType(airport.airportType)} <br/>
                            Elevation: {airport.elevation}'
                        </p>
                    </Card.Text>

                    <Card.Footer className="text-center">
                        {homeLink}
                        {wikiLink}
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

export default AirportCard