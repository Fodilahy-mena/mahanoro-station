import React, {useEffect} from 'react'
import styled from 'styled-components';
import {resetSeats, addToSeats,} from '../actions';
import {useDispatch } from 'react-redux';
import CitySvg from '../icons/city.svg';

import { Link } from 'react-router-dom';
const CityIcon = styled.img`
    width: 35px;
    height: 35px;
`;
const TripList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    padding: 0;
`;

const TripItem = styled.li`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 33px 28px;
    background: #0F0E17;
`;

const TripDirection = styled.h3`
    color: #FFFFFF;
    margin-left: 32px;
    text-transform: uppercase;
`;


export default function Cities({getTrips, trips}) {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(resetSeats());
    // }, []);
    useEffect(() => {
		getTrips();
        
	}, []);
    

    console.log(trips)
    function getUniqueListBy(trips, key) {
        return [...new Map(trips.map(trip => [trip[key], trip])).values()]
    }
    const filteredTripsByDestination = getUniqueListBy(trips, 'destination')
    
    return (
        <div>
            <h2>Where are you going?</h2>

            <TripList>
                {filteredTripsByDestination.map(trip => (
                    <Link to={`/city/${trip.destination}`} key={trip.id} onClick={() => resetSeats()}>
                        <TripItem>
                            <CityIcon src={CitySvg}/>
                            <TripDirection>{trip.destination}</TripDirection>
                        </TripItem>
                    </Link>
                ))}
            </TripList>
        </div>
    )
}
