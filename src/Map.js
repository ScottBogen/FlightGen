import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


/*  Notes:
        We will need a map centered at the midpoint between Departing and Arriving
        We will need two Markers -- one for departure one for arrival

        So really, all we need to send in the props to this Map is the departure=[lat, long] and arrival=[lat, long]
*/

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render() {
        
        const latIndex = 0;
        const longIndex = 1;

        const departureCoords = this.props.departureCoords;
        const arrivalCoords = this.props.arrivalCoords;

        const latitudalMidpoint = (departureCoords[latIndex] + arrivalCoords[latIndex]) / 2;
        const longitudalMidpoint = (departureCoords[longIndex] + arrivalCoords[longIndex]) / 2;


        // this midpoint is for centering the view
        const midpoint = [latitudalMidpoint, longitudalMidpoint];

        return (
            <div>
                <MapContainer center={midpoint} zoom={6} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={departureCoords}>

                    </Marker>

                    <Marker position={arrivalCoords}>

                    </Marker>
                </MapContainer>
            </div>
        );
    }
}

export default Map
