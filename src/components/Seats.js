import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { useParams} from 'react-router-dom';
import SeatItem from './SeatItem';
import ConfirmationBooking from './ConfirmationBooking';

const DestinationFrame = styled.div`
    display: flex;
    flex-direction: row;
    max-width: max-content;
    margin-left: auto;
    margin-right: auto;
    .open {
        opacity: 1;
        pointer-events: all;
    }
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

export default function Seats({trips, seatItems, bookSeat, unbookSeat, booking, bookings, updateBookingSeats}) {
    const [showModal, setShowModal] = useState(false);
    const { tripId } = useParams();
    const trip = trips.find(trip => trip.id == tripId);
    const [seats, setSeats] = useState([]);
    console.log("seats",seats)
    const [updatedTrip, setUpdatedTrip] = useState(trip)
    console.log("show",showModal)
    console.log(tripId && tripId)
    useEffect(() => {
        setUpdatedTrip(prevSate => {
            return {
                ...prevSate,
                seats: []
            }
        })
    }, [])
    console.log("updted",updatedTrip);
    
    console.log("seatItems",seatItems);
    console.log("bookings",bookings)
    return (
        <div>
            
            <DestinationFrame>
                <ConfirmationBooking booking={booking} updatedTrip={updatedTrip} setShowModal={setShowModal} showModal={showModal}/>
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
                            <SeatItem setSeats={setSeats} updateBookingSeats={updateBookingSeats} booking={booking} key={seat.id} seatItems={seatItems} bookSeat={bookSeat} unbookSeat={unbookSeat} seat={seat}/>
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
                    <button onClick={() => {
                        setShowModal(!showModal)
                        setUpdatedTrip(prevSate => {
                            return {
                                ...prevSate,
                                seats: seats
                            }
                        })
                        console.log("up",updatedTrip)
                        
                    }
                        }>Book <i>{seatItems.length > 0 ? seatItems.length : 0}</i> seat</button>
                    <p>Total: {seatItems.length > 0 ? trip.price * seatItems.length : 0} Ar</p>
                </div>
            </InfoFeature>
        </div>
    )
}
