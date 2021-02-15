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

const List = styled.ul`
    padding: 0;
`;

const Item = styled.li`
    list-style: none;
    display: grid;
    /* justify-content: space-between;
    flex-direction: row; */
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    button {
        max-width: fit-content;
        margin-left: auto;
    }
`;

const ItemFrame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const BaseItem = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function Destination({trips}) {
    const { destination } = useParams();
    console.log(destination && destination)
    
    const filteredDestination = trips.filter(trip => trip.destination === destination);
    console.log(filteredDestination)
    return (
        <div>
            <DestinationFrame>
                <Clock src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUki2YIQSsl1Ktkh0oMVtv8xLg9-VvFfNuEQ&usqp=CAU" alt="Clock image"/>
                <Base>
                    <h2>Next trips to:</h2>
                    <p>{destination && destination}</p>
                </Base>
            </DestinationFrame>
            <List>
                {filteredDestination.map(destination => (
                <Item key={destination.id}>
                    <i>🚖 </i>
                    <ItemFrame>
                        <BaseItem>
                            <span>{new Date(destination.departureTime).getDay()}</span>
                            <span>{new Date(destination.departureTime).getHours()}:{new Date(destination.departureTime).getMinutes()}</span>
                        </BaseItem>
                        <BaseItem>
                            <span>{new Date(destination.departureTime).toLocaleDateString()}</span>
                            <span>{destination.seats.filter(seat => seat.isAvailable === true).length} seats left</span>
                        </BaseItem>
                    </ItemFrame>
                    <Link to={`/trip/${destination.id}`}>
                        <button>Book a seat</button>
                    </Link>
                </Item>
                ))}
            </List>
        </div>
    )
}
