import React from 'react'
import { Button } from 'react-bootstrap';

class MenuButton extends React.Component {
    
    constructor() {
        super();
        this.state = {};
    }


    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            padding: "100px"
        };

        return (
            <div>
                <Button type="button" style={mystyle}>{this.props.message}</Button>
            </div>

        );
    }
} 

export default MenuButton