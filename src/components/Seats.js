import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import SeatItem from './SeatItem';

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

const SeatList = styled.ul`
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    .booked {
        background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(360deg, #FFAC33 117.76%, rgba(255, 255, 255, 0) 187.45%);
    }
    .seat_disabled {
        background-color: unset;
        cursor: not-allowed;
    }
`;

const InfoFeature = styled.section`
    display:flex;
    grid-template-columns: auto auto;
    gap: 75px;
    max-width: max-content;
    margin-left: auto;
    margin-right: auto;
`;
const InfoList = styled.ul`
    list-style: none;
    padding: 0;
`;
const InfoItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-items: center;

`;

const InfoBase = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export default function Seats({trips, seatItems, bookSeat, unbookSeat}) {

    const { tripId } = useParams();
    console.log(tripId && tripId)
    const trip = trips.find(trip => trip.id == tripId);
    console.log(trip);

    console.log("seatItems",seatItems);

    return (
        <div>
            <DestinationFrame>
                <Clock src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7NdbqIz7MkVy7G7CGjhfofoZZSDxyhvWAw&usqp=CAU" alt="Bus image"/>
                <Base>
                    <h2>Book a seat to:</h2>
                    <p>{trip.destination}</p>
                </Base>
            </DestinationFrame>

            <InfoFeature>
                <div>
                    <h3>Pick a seat</h3>
                    <SeatList>
                        {trip.seats.map(seat => (
                            <SeatItem key={seat.id} seatItems={seatItems} bookSeat={bookSeat} unbookSeat={unbookSeat} seat={seat}/>
                        ))}
                    </SeatList>
                </div>
                <div>
                    <h3>Trip informations:</h3>
                    <InfoList>
                        <InfoItem>
                            <InfoBase>
                                <span>Departure time:</span>
                                <span>{new Date(trip.departureTime).getHours()}:{new Date(trip.departureTime).getMinutes()},{new Date(trip.departureTime).toLocaleDateString()}</span>
                            </InfoBase>
                            <InfoBase>
                                <span>Driver:</span>
                                <span>{trip.driverName}</span>
                            </InfoBase>
                            <InfoBase>
                                <span>Driver's contact:</span>
                                <span>{trip.driverContact}</span>
                            </InfoBase>
                            <InfoBase>
                                <span>Estimated duration:</span>
                                <span>{trip.estimatedDuration}</span>
                            </InfoBase>
                            <InfoBase>
                                <span>Breaks:</span>
                                <span>{trip.breaks}</span>
                            </InfoBase>
                        </InfoItem>
                    </InfoList>
                    <div>
                        <span>{trip.price}</span>
                        <span>Ar</span>
                        <span>/seat</span>
                    </div>
                    <button>Book <i>{seatItems.length > 0 ? seatItems.length : 0}</i> seat</button>
                    <p>Total: {seatItems.length > 0 ? trip.price * seatItems.length : 0} Ar</p>
                </div>
            </InfoFeature>
        </div>
    )
}
