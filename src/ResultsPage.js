import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap";
import AirportCard from './AirportCard'
import Map from './Map'


class ResultsPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state  = {}
        this.handleRandom = this.handleRandom.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleRandom(e) {
        this.props.onRandom();
    }

    handleBack(e) {
        this.props.onBack();
    }


    render() {

        const departure = this.props.departureAirport;
        const arrival = this.props.arrivalAirport;

        if (!departure || !arrival) {
            return(<div> Loading... </div>);
        }
        
        return ( 
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-left">Departing</h1>
                            {<AirportCard info={departure} />}
                        </Col>

                        <Col>
                            <h1 className="text-left">Arriving</h1>
                            {<AirportCard info={arrival} />}
                            <Button variant="primary" onClick={this.handleRandom}>Randomize</Button>
                        </Col>
                    </Row>

                        
                </Container>
                <Map    
                    departureCoords={[departure.latitudeDeg, departure.longitudeDeg]} 
                    arrivalCoords={[arrival.latitudeDeg, arrival.longitudeDeg]}
                />



                <Button variant="primary" onClick={this.handleBack}> Back </Button>

            </div>
        );
    }

}

export default ResultsPage
