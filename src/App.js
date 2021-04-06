import React from 'react'
import FlightForm from './FlightForm'
import ResultsPage from './ResultsPage'
import Header from './Header'
import AirportService from './AirportService'
import airports from './AirportList'
import Map from './Map'
import "./App.css"


/* 
  Main page: FlightForm
  When the form is successfully submitted, change this view to the results page, where values will be temporary until filled in by the response
*/


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
        allowsSmallAirports: false,
        allowsMediumAirports: false,
        allowsLargeAirports: false
      }, 
      airports: [],
      arrivalAirport: null,
      departureAirport: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.switchPages = this.switchPages.bind(this);
  }

  // it would be cleaner if I passed the type in addition to val and name, then type checked to see if type="checkbox"
  handleChange(value, name) {
    let input = this.state.userInputs;
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

  handleSubmit(){ 
    // make call to axios
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

  updateAirports(airports) {
    const departure = airports[0];
    const arrival = this.selectRandomAirport(departure);

    this.setState({
      arrivalAirport: arrival,
      departureAirport: departure
    });

    console.log("State:")
    console.log(this.state);
  }

  selectRandomAirport(currAirport) {
    console.log("Curr airport: ")
    console.log(currAirport);
    if (!currAirport || !this.state.airports) return null;
    
    const min = 1;
    const max = this.state.airports.length;
    const currIndex = this.state.airports.map(e => e.airportId).indexOf(currAirport.airportId);
    console.log("min = " + min + " max = " + max + " curr = " + currIndex);

    
    var randomInt = currIndex;
    while (randomInt == currIndex) {
        randomInt = Math.floor(Math.random() * (max - min) + min);
    }

    console.log("Random gen: ");
    console.log(this.state.airports[randomInt]);
    return this.state.airports[randomInt];
  }

  handleRandom(e) {
    var originalArrival = this.state.arrivalAirport;
    var newArrival = this.selectRandomAirport(originalArrival);
    this.setState({
        arrivalAirport: newArrival
    });
  }

  switchPages() {
    this.setState(prevState => ({
      formPage: !prevState.formPage,
      resultsPage: !prevState.resultsPage,

      userInputs: {
        allowsSmallAirports: false,
        allowsMediumAirports: false,
        allowsLargeAirports: false
      }

    }));
  }

  render () {
    return (
      <div>
        <Header/>
        {this.state.formPage && 
          <FlightForm 
            input={this.state.userInputs} 
            onChange={this.handleChange} 
            onSubmit={this.handleSubmit}/>
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
