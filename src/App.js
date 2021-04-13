import React from 'react'
import FlightForm from './FlightForm'
import ResultsPage from './ResultsPage'
import Header from './Header'
import AirportService from './AirportService'
import "./App.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = { 
      formPage: true,
      resultsPage: false,
      userInputs: {
        arrivalAirport: '',
        departureAirport: '',
        minRange: '',
        maxRange: '',
        allowsSmallAirports: true,
        allowsMediumAirports: true,
        allowsLargeAirports: true
      }, 
      airports: [],
      arrivalAirport: null,
      departureAirport: null,

      airportValidated: true,
      distanceValidated: true,
      airportSizeValidated: true,
      formInvalidMessage: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.switchPages = this.switchPages.bind(this);
  }

  // handleChange will update the state's userInputs to match what the program's user enters
  handleChange(value, name) {
    let input = this.state.userInputs;
    
    // if the type is a checkbox, 
    if (name.includes("allows")) {
      const cur = input[name];
      input[name] = !cur;
    }
    // if it's not a checkbox, simply update the value
    else {
      input[name] = value;  
    }
    this.setState({
      input
    });

    this.validateForm();
  }

  // handleSubmit will make a call to the backend and update accordingly
  handleSubmit(){ 
    let inputs = this.state.userInputs;

    AirportService.getAirports(inputs).then((response) => {  
      var airports = response.data;

      this.setState({
        airports: airports
      })

      this.updateAirports(airports);
      this.switchPages();
    });
  }

  // updates airport list after receiving it from GET call
  updateAirports(airports) {
    const departure = airports[0];
    const arrival = this.selectRandomAirport(departure);

    this.setState({
      arrivalAirport: arrival,
      departureAirport: departure
    });
  }

  // selects a random airport to be the Arrival airport
  // input parameter is the current airport, guaranteed not to be returned by the function
  selectRandomAirport(currAirport) {
    if (!currAirport || !this.state.airports) return null;
    
    const min = 1;
    const max = this.state.airports.length;
    const currIndex = this.state.airports.map(e => e.airportId).indexOf(currAirport.airportId);
    var randomInt = currIndex;

    while (randomInt == currIndex) {
        randomInt = Math.floor(Math.random() * (max - min) + min);
    }

    return this.state.airports[randomInt];
  }

  
  
  // switch from Form to Results or vice versa
  switchPages() {
    this.setState(prevState => ({
      formPage: !prevState.formPage,
      resultsPage: !prevState.resultsPage,
      
      userInputs: {
        allowsSmallAirports: true,
        allowsMediumAirports: true,
        allowsLargeAirports: true
      }
      
    }));
  }
  

  // handles user pressing the "Random" button on Results page
  handleRandom(e) {
    var originalArrival = this.state.arrivalAirport;
    var newArrival = this.selectRandomAirport(originalArrival);
    this.setState({
        arrivalAirport: newArrival
    });
  }


  validateForm() {    
    const rangeIsInvalid = this.validateRange();
    const sizeIsInvalid = this.validateSize();

    if (rangeIsInvalid) {
      this.setState({
        formIsValid: false,
        formInvalidMessage: rangeIsInvalid
      }); 
    } else if (sizeIsInvalid) {
      this.setState({
        formIsValid: false,
        formInvalidMessage: sizeIsInvalid
      }); 
    } else {
      this.setState({
        formIsValid: true
      })
    }

    this.validateRange();
  }

  validateRange() {
    const minRange = this.state.userInputs.minRange;
    const maxRange = this.state.userInputs.maxRange;

    if (minRange === "" || maxRange === "") {
      return ("No input in min/max range")
    }

    if (isNaN(minRange) || isNaN(maxRange)) {
      return ("Distance must be numeric");
    }

    if (minRange < 0) {
      return ("Distance cannot be negative");
    }

    if (maxRange < minRange) {
      return ("Max cannot be larger than Min");
    }

    if (maxRange > 4000) {
      return ("Max range cannot exceed 4000nm")
    }

    return null;
  }

  validateSize() {
    const allowsSmallAirports = this.state.userInputs.allowsSmallAirports;
    const allowsMediumAirports = this.state.userInputs.allowsMediumAirports;
    const allowsLargeAirports = this.state.userInputs.allowsLargeAirports;

    if (!allowsSmallAirports && !allowsMediumAirports && !allowsLargeAirports) {
      return ("Airport size must be selected");
    }

    return null;
  }


  render () {
    return (
      <div>
        <Header/>
        {this.state.formPage && 
          <FlightForm 
            input={this.state.userInputs} 
            onChange={this.handleChange} 
            onSubmit={this.handleSubmit}
            formIsValid={this.state.formIsValid}
          />
        }
        
        {this.state.resultsPage && 
          <ResultsPage
            onRandom={this.handleRandom} 
            onBack={this.switchPages}
            airports={this.state.airports} 
            arrivalAirport={this.state.arrivalAirport} 
            departureAirport={this.state.departureAirport}
          />
        }
      </div> 
    );
  }
}

export default App;
