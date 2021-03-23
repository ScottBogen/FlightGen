import React from 'react'
import { Card } from 'react-bootstrap'

class AirportCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = { }
    }    
    render() {
        return(
            <div>
                <Card>
                    <Card.Title>{this.props.info.airportName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.info.municipality}</Card.Subtitle>
                    <Card.Text>
                        <p>Size: {this.props.info.airportType}</p>
                        <p>Elevation: {this.props.info.elevation}'</p>
                    </Card.Text>
                    <Card.Link href={this.props.info.homelink} >Website</Card.Link>
                    <Card.Link href={this.props.info.wikipedia}>Wikipedia</Card.Link>
                </Card>
            </div>
        )
    }
}

export default AirportCard