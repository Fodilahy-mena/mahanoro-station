import React, {useEffect} from 'react'
import styled from 'styled-components';
import {resetSeats, addToSeats,} from '../actions';
import {useDispatch } from 'react-redux';
import SeatSvg from '../icons/seat.svg';

const SeatImage = styled.img`
    max-width: 44px;
`;
const Item = styled.li`
    cursor: pointer;
    list-style: none;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #E53170;
`;

export default function SeatItem({seatItems, seat, bookSeat, unbookSeat}) {

    const isAlreadyBooked = seatItems.some(item => item.id == seat.id);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetSeats());
    }, []);
    
    return (
        isAlreadyBooked ? 
        <Item className="booked" onClick={() => { 
            unbookSeat(seat.id)
            }}>
            <SeatImage src={SeatSvg} alt="Seat"/>
        </Item>
        :
        <Item className={!seat.isAvailable && 'seat_disabled'} onClick={() => { 
            if(seat.isAvailable) {
                setTimeout(() => {
                    dispatch(addToSeats(seat));
                }, 50)
                setTimeout(() => {
                    bookSeat(seat);
                }, 100)
            } 

            }} key={seat.id}>
            <SeatImage src={SeatSvg} alt="Seat"/>
        </Item>
    )
}
