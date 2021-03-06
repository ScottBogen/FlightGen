import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import MenuButton from './Button'
import AirportService from './AirportService'

class FlightForm extends React.Component {

  constructor() {
    super();
    this.state = {
      airports: []
    }
  }
  
  componentDidMount() {
    AirportService.getAirports().then((response) => {
      this.setState({ airports: response.data })
    });
  }


  render() {
    return (
      <div>
          <Container>
            <Form>
              <Form.Group controlId="formAirportSelection">

                <Form.Label> <h4>Airport</h4></Form.Label>
                <Form.Control type="text" placeholder="e.g. KLAX or Los Angeles Intl."/>

                <MenuButton message="Arrivals"/>
                <MenuButton message="Departures"/>
                <MenuButton message="Random"/> 

              </Form.Group>

              <Form.Group controlId="formDistanceSelection">
                <Form.Label><h4>Distance  (in nautical miles)</h4></Form.Label>
                <Row>
                  <Col xs="3">
                    <Form.Label>Min</Form.Label>
                    <Form.Control type="text" placeholder="0"></Form.Control>
                  </Col>

                  <Col xs="3">
                    <Form.Label> Max</Form.Label>
                    <Form.Control type="text" placeholder="500"></Form.Control>
                  </Col>
                </Row>
              </Form.Group>
              
              <Form.Group controlId="formAirportSizeSelection">
                <Form.Label><h4>Airport Size</h4></Form.Label>
                <Form.Check type="checkbox" label="Small" />
                <Form.Check type="checkbox" label="Medium" />
                <Form.Check type="checkbox" label="Large" />
              </Form.Group>

              <Button type="submit"> Generate Flight </Button>

            </Form>

            <h1 className="text-center">
              Airport List: {
                this.state.airports.map(airport => <p>{airport.airportName}</p>)
              }
              </h1>
          </Container>
      </div>
    );
  }
}

export default FlightForm