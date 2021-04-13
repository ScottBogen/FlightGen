import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';


function FlightForm(props) {
  const input = props.input; 
  const departureAirport = input.departureAirport; 
  const minRange = input.minRange;
  const maxRange = input.maxRange;
  const allowsSmallAirports = input.allowsSmallAirports;
  const allowsMediumAirports = input.allowsMediumAirports;
  const allowsLargeAirports = input.allowsLargeAirports;

  function handleChange(e) {
      props.onChange(e.target.value, e.target.name);
  }

  function handleSubmit(e) {
      e.preventDefault();
      props.onSubmit();
  }

  return (
    <div>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formAirportSelection">

            <Form.Label> <h4>Airport</h4></Form.Label>
              <Form.Control 
                type="text" 
                placeholder="e.g. KLAX or Los Angeles Intl." 
                name="departureAirport"
                value={departureAirport}
                onChange={handleChange}/>
            </Form.Group>

            <Form.Group controlId="formDistanceSelection">
              <Form.Label><h4>Distance  (in nautical miles)</h4></Form.Label>
              <Row>
                <Col xs="3">
                  <Form.Label>Min</Form.Label>
                  <Form.Control 
                    type="text" 
                    // placeholder="0"
                    name="minRange"
                    value={minRange}
                    onChange={handleChange} />
                </Col>

                <Col xs="3">
                  <Form.Label> Max</Form.Label>
                  <Form.Control 
                    type="text" 
                    // placeholder="500"
                    name="maxRange"
                    value={maxRange}
                    onChange={handleChange} />
                </Col>
              </Row>
            </Form.Group>
            
            <Form.Group controlId="formAirportSizeSelection">
              <Form.Label><h4>Airport Size</h4></Form.Label>
              <Form.Check 
                type="checkbox" 
                label="Small" 
                name="allowsSmallAirports"
                value={allowsSmallAirports} 
                onChange={handleChange}/>

              <Form.Check 
                type="checkbox" 
                label="Medium" 
                name="allowsMediumAirports"
                value={allowsMediumAirports}
                onChange={handleChange} />


              <Form.Check 
                type="checkbox" 
                label="Large" 
                name="allowsLargeAirports"
                value={allowsLargeAirports}
                onChange={handleChange} />         
                
            </Form.Group>

            <Button type="submit"> Generate Flight </Button>
          </Form>
        </Container>
    </div>
  );
}

export default FlightForm
