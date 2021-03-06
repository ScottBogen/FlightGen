import React from 'react'
import { Button } from 'react-bootstrap';

class MenuButton extends React.Component {
    
    constructor() {
        super();
        this.state = {
            isActive: false
        };
    }


    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
        };

        return (
            <div>
                <Button type="button" class="btn-lg" style={mystyle} >{this.props.message}</Button>
            </div>
        );
    }
} 

export default MenuButton