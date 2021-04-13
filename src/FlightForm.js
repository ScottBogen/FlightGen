import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './FlightForm.css'


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

            <Form.Label className="form-label"> <h4>Airport</h4></Form.Label>
              <Form.Control 
                type="text" 
                placeholder="e.g. KLAX or Los Angeles Intl." 
                name="departureAirport"
                value={departureAirport}
                onChange={handleChange}
                required
                />
            </Form.Group>

            <Form.Group controlId="formDistanceSelection">
              <Form.Label className="form-label"><h4>Distance  (in nautical miles)</h4></Form.Label>
              <Row>
                <Col xs="3">
                  <Form.Label>Min</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="minRange"
                    value={minRange}
                    onChange={handleChange} 
                    required
                    />
                </Col>

                <Col xs="3">
                  <Form.Label className="form-label"> Max</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="maxRange"
                    value={maxRange}
                    onChange={handleChange} 
                    required
                    />
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
                onChange={handleChange}
                defaultChecked={allowsSmallAirports}
              />

              <Form.Check 
                type="checkbox" 
                label="Medium" 
                name="allowsMediumAirports"
                value={allowsMediumAirports}
                onChange={handleChange} 
                defaultChecked={allowsSmallAirports}
              />

              <Form.Check 
                type="checkbox" 
                label="Large" 
                name="allowsLargeAirports"
                value={allowsLargeAirports}
                onChange={handleChange} 
                defaultChecked={allowsSmallAirports}
              />         
            </Form.Group>

            <Button disabled={!props.formIsValid} type="submit"> Generate Flight </Button>
          </Form>
        </Container>
    </div>
  );
}

export default FlightForm
