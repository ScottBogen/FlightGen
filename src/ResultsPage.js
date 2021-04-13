import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap";
import AirportCard from './AirportCard'
import Map from './Map'


function ResultsPage(props) {

    const departure = props.departureAirport;
    const arrival = props.arrivalAirport;

    function handleRandom(e) {
        props.onRandom();
    }

    function handleBack(e) {
        props.onBack();
    }

    if (!departure || !arrival) {
            return(<div> Loading... </div>);
    }
        
    return ( 
        <div>
            <Container className="border">
                <Row>
                    <Col xs={5} className="left-col">
                        <h2 className="text-left">Departing </h2>
                        {<AirportCard info={departure} />}

                        <h2 className="text-left">Arriving  &nbsp;                           
                        <Button variant="primary" onClick={handleRandom}>Random</Button>
                        </h2>  

                        {<AirportCard info={arrival} />}
                        <Button variant="primary" onClick={handleBack}> Back </Button>
                    </Col>

                    <Col xs={7} className="right-col">
                        <Map    
                            departureCoords={[departure.latitudeDeg, departure.longitudeDeg]} 
                            arrivalCoords={[arrival.latitudeDeg, arrival.longitudeDeg]}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default ResultsPage
