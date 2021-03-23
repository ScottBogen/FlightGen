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
      airports: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log(inputs)

    AirportService.getAirports(inputs).then((response) => {
      this.setState({ airports: response.data })
      console.log(response.data);
    })

    this.switchPages();

  }

  switchPages() {
    this.setState(prevState => ({
      formPage: !prevState.formPage,
      resultsPage: !prevState.resultsPage
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
            airports={this.state.airports}
          />
        }

        {/* <h1> Airport List: </h1>
        
        <div>
          {this.state.airports.map(airport => <p>{airport.airportName}</p>)}
        </div> */}


      </div> 
    );
  }
}

export default App;
