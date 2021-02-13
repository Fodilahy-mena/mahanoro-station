import React from 'react'
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const DestinationFrame = styled.div`
    display: flex;
    flex-direction: row;
    max-width: max-content;
    margin-left: auto;
    margin-right: auto;
`;

const Clock = styled.img`
    width: 134px;
`;

const Base = styled.div`
    margin-left: 70px;
`;


export default function Destination({trips}) {
    const { destination } = useParams();
    console.log(destination && destination)
    const trip = trips.find(trip => trip.destination == destination);
    const filteredDestination = trips.filter(trip => trip.destination === destination);
    console.log(filteredDestination)
	console.log("trip",trip)
    return (
        <div>
            <DestinationFrame>
                <Clock src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUki2YIQSsl1Ktkh0oMVtv8xLg9-VvFfNuEQ&usqp=CAU" alt="Clock image"/>
                <Base>
                    <h2>Next trips to:</h2>
                    <p>{destination && destination}</p>
                </Base>
            </DestinationFrame>
            <ul>
                {filteredDestination.map(destination => (
                <li key={destination.id}>
                    <img />
                    <div>
                        <div>
                            <span>{new Date(destination.departureTime).getDay()}</span>
                            <span>{new Date(destination.departureTime).getMinutes()}:{new Date(destination.departureTime).getSeconds()}</span>
                        </div>
                        <div>
                            <span>{new Date(destination.departureTime).toDateString()}</span>
                            <span>{destination.seats.filter(seat => seat.isAvailable === true).length} seats left</span>
                        </div>
                    </div>
                    <button>Book a seat</button>
                </li>
                ))}
            </ul>
        </div>
    )
}
