import React from 'react'
import FlightForm from './FlightForm'
import ResultsPage from './ResultsPage'
import Header from './Header'
import AirportService from './AirportService'


/* 
  Main page: FlightForm
  When the form is successfully submitted, change this view to the results page, where values will be temporary until filled in by the response
*/


class App extends React.Component {
  constructor() {
    super()
    this.state = { 
      currentPage: <FlightForm/>,
      currentButton: [],
      input: {
        arrivalAirport: '',
        departureAirport: '',
        minRange: '',
        maxRange: '',
        allowsSmallAirports: false,
        allowsMediumAirports: false,
        allowsLargeAirports: false
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  // it would be cleaner if I passed the type in addition to val and name, then type checked to see if type="checkbox"
  handleChange(value, name) {
    let input = this.state.input;
    

    if (name.includes("allows")) {
      const cur = input[name];
      input[name] = !cur;
    }
    else {
      input[name] = value;  
    }

    this.setState({
      input
    }); 
  }

  handleSubmit() {
    // make call to axios

    AirportService.getAirports().then((response) => {
      this.setState()
    })

  }


// componentDidMount() {
//   AirportService.getAirports().then((response) => {
//     this.setState({ airports: response.data })
//   });
// }

  render () {
    return (
      <div>
        <Header/>
        <FlightForm input={this.state.input} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        
        Departure: {this.state.input.departureAirport}
        Arrival: {this.state.input.arrivalAirport}
        Min: {this.state.input.minRange}
        Max: {this.state.input.maxRange}

      </div> 
    );
  }
}

export default App;
