import React from 'react'
import { Button, Col, Container, Form, FormGroup, FormLabel, Nav, Row } from 'react-bootstrap';
import MenuButton from './Button'

class FlightForm extends React.Component {

  constructor() {
    super();
    this.state = {}
  }


  
  render() {
    return (
      <div>
          {/* <Nav style={{backgroundColor: '#f1f1f1'}}> */}

          <Container>
            <Form>
              <Form.Group controlId="formAirportSelection">

                {/* <Form.Label> <h4>Airport</h4></Form.Label>
                <Form.Control type="text" placeholder="e.g. KLAX or Los Angeles Intl."/>
                

                <MenuButton message="Arrivals"/>
                <MenuButton message="Departures"/>
                <MenuButton message="Random"/> */}

                <Form.Label> <h4>Departing</h4></Form.Label>
                <Form.Control type="text" placeholder="e.g. KLAX or Los Angeles Intl."></Form.Control>
                <Form.Text> <h5>— or —</h5> </Form.Text>

                <Form.Label><h4>Arriving</h4></Form.Label>
                <Form.Control type="text" placeholder="e.g. KDEN or Denver Intl."></Form.Control>
                

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
          </Container>
          {/* </Nav> */}
      </div>
    );
  }
}

export default FlightForm