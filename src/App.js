import React from 'react'
import FlightForm from './FlightForm'
import ResultsPage from './ResultsPage'
import Header from './Header'

/* 
  Main page: MainView
  When the form is successfully submitted, change this view to the results page, where values will be temporary until filled in by the response
  Instead of having a whole component dedicated just to loading, maybe try having a boolean to see if a response has been generated yet, and if false then show loading icon
*/


class App extends React.Component {
  constructor() {
    super()
    this.state = { 
      currentPage: <FlightForm/> 
    }
  }

  render () {
    return (
      <div>
        <Header/>
        <FlightForm/>
      </div>
    
    );
  }
}

export default App;
