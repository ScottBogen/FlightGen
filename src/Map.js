import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import './Map.css'

/*  Notes:
        We will need a map centered at the midpoint between Departing and Arriving
        We will need two Markers -- one for departure one for arrival

        So really, all we need to send in the props to this Map is the departure=[lat, long] and arrival=[lat, long]
*/

function Map(props) {

    // indices for [lat,long]
    const latIndex = 0;
    const longIndex = 1;

    const departureCoords = props.departureCoords;
    const arrivalCoords = props.arrivalCoords;

    // find the midpoint to calculate where to center the map
    const latitudalMidpoint = (departureCoords[latIndex] + arrivalCoords[latIndex]) / 2;
    const longitudalMidpoint = (departureCoords[longIndex] + arrivalCoords[longIndex]) / 2;
    const midpoint = [latitudalMidpoint, longitudalMidpoint];
    
    // Polyline requires points/color
    const polylinePoints = [departureCoords, arrivalCoords];
    const polyLineColor = {color: 'red'};


    return (
        <div>
            <MapContainer center={midpoint} zoom={6} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http:/`/osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={departureCoords} />
                <Marker position={arrivalCoords}  />

                <Polyline positions={polylinePoints} pathOptions={polyLineColor}/>

            </MapContainer>
        </div>
    );
}

export default Map
