import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import MenuButton from './Button'
import AirportService from './AirportService'

class FlightForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value, e.target.name);
  }

  handleSubmit(e) {
    this.props.onSubmit();
  }
  
  render() {
    const input = this.props.input; 
    
    const departureAirport = input.departureAirport; 
    const arrivalAirport = input.arrivalAirport;
    const minRange = input.minRange;
    const maxRange = input.maxRange;
    const allowsSmallAirports = input.allowsSmallAirports;
    const allowsMediumAirports = input.allowsMediumAirports;
    const allowsLargeAirports = input.allowsLargeAirports;

    console.log(input);

    return (
      <div>
          <Container>
            <Form>
              <Form.Group controlId="formAirportSelection">

              <Form.Label> <h4>Departing</h4></Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="e.g. KLAX or Los Angeles Intl." 
                  name="departureAirport"
                  value={departureAirport}
                  onChange={this.handleChange}/>

                <Form.Text> <h5>— or —</h5> </Form.Text>

                <Form.Label><h4>Arriving</h4></Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="e.g. KDEN or Denver Intl."
                  name="arrivalAirport"
                  value={arrivalAirport}
                  onChange={this.handleChange}/>

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
                      onChange={this.handleChange} />
                  </Col>

                  <Col xs="3">
                    <Form.Label> Max</Form.Label>
                    <Form.Control 
                      type="text" 
                      // placeholder="500"
                      name="maxRange"
                      value={maxRange}
                      onChange={this.handleChange} />
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
                  onChange={this.handleChange}/>

                <Form.Check 
                  type="checkbox" 
                  label="Medium" 
                  name="allowsMediumAirports"
                  value={allowsMediumAirports}
                  onChange={this.handleChange} />


                <Form.Check 
                  type="checkbox" 
                  label="Large" 
                  name="allowsLargeAirports"
                  value={allowsMediumAirports}
                  onChange={this.handleChange} />              
                  
              </Form.Group>

              <Button type="submit" onChange={this.handleSubmit}> Generate Flight </Button>

            </Form>

            <h1 className="text-center">
              Airport List: 
              </h1>
          </Container>
      </div>
    );
  }
}

// componentDidMount() {
//   AirportService.getAirports().then((response) => {
//     this.setState({ airports: response.data })
//   });
// }

export default FlightForm
