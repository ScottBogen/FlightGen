import React from "react"
import { Container } from "react-bootstrap"


class Header extends React.Component {

    constructor() {
        super()
        this.state = {
            
        }
    }


    render() {
        return (
            <div>
                <Container>
                <h1 className="display-3 text-center"> FlightGen Beta</h1> 
                </Container>
            </div>
        );
    }
}

export default  Header