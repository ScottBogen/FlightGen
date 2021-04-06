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
                <Container className="border">
                    <Row>
                        <Col xs={5} className="left-col">
                            <h2 className="text-left">Departing  </h2>
                            {<AirportCard info={departure} />}

                            <h2 className="text-left">Arriving  &nbsp;                           
                            <Button variant="primary" onClick={this.handleRandom}>Random</Button>
                            </h2>  

                            {<AirportCard info={arrival} />}
                            <Button variant="primary" onClick={this.handleBack}> Back </Button>
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

}

export default ResultsPage
