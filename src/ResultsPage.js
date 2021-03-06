import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import AirportCard from './AirportCard'


class ResultsPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state  = {
            error: null,
            resultReceived: false,
            airportItems: []
        }

    }

    render() {
        return ( 
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-left">Departing</h1>
                            <AirportCard/>
                        </Col>

                        <Col>
                            <h1 className="text-left">Arriving</h1>
                            <AirportCard/>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }

}

export default ResultsPage
