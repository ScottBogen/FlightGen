import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap";
import AirportCard from './AirportCard'


class ResultsPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state  = {
            seatac: {
                airportName: 'Seattle Tacoma International Airport',
                elevation: 433,
                ident: 'KSEA',
                airportType: 'large_airport',
                municipality: 'Seattle',
                homelink: 'http://www.portseattle.org/seatac/',
                wikipedia: 'https://en.wikipedia.org/wiki/Seattle–Tacoma_International_Airport'
            },

            denver: {
                airportName: 'Denver International Airport',
                elevation: 5431,
                ident: 'KDEN',
                airportType: 'large_airport',
                municipality: 'Denver',
                homelink: 'http://www.flydenver.com/',
                wikipedia: 'https://en.wikipedia.org/wiki/Denver_International_Airport'
            },
            airports: null
        }
    }

    randomizeButtonClicked(e) {

    }

    backButtonClicked(e) {

    }

    selectRandomAirport(currAirport) {
        if (!currAirport) return null;
        
        const min = 1;
        const max = this.props.airports.length;
        const currIndex = this.props.airports.map(e => e.airportId).indexOf(currAirport.airportId);
        var randomInt = currIndex;

        while (randomInt == currIndex) {
            randomInt = Math.floor(Math.random() * (max - min) + min);
        }

        return this.props.airports[randomInt];
        
    }

    render() {
        
        var originAirport = this.props.airports[0];
        var destinationAirport = this.selectRandomAirport(originAirport);

        if (!originAirport || !destinationAirport) {
            return(<div> Loading... </div>);
        }

        return ( 
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-left">Departing</h1>
                            {<AirportCard info={originAirport} />}
                        </Col>

                        <Col>
                            <h1 className="text-left">Arriving</h1>
                            {<AirportCard info={destinationAirport} />}
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }

}

export default ResultsPage
