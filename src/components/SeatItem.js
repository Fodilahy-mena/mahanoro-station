import React from 'react'
import styled from 'styled-components';

const SeatImage = styled.img`
    max-width: 44px;
`;
const Item = styled.li`
    list-style: none;
    padding: 8px;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #E53170;
`;

export default function SeatItem({seatItems, seat, bookSeat, unbookSeat, setSeats}) {

    const isAlreadyBooked = seatItems.some(item => item.id == seat.id);
    
    return (
        isAlreadyBooked ? 
        <Item className="booked" onClick={() => { 
            unbookSeat(seat.id)
            }}>
            <SeatImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvlNhh18sqYF2GvooJM_8PoIxuDkzqIgdlg&usqp=CAU" alt="Seat"/>
        </Item>
        :
        <Item className={!seat.isAvailable && 'seat_disabled'} onClick={() => { 
            if(seat.isAvailable) {
                bookSeat(seat)
                setSeats(prevState => [...prevState, seat]);
            } 
            }} key={seat.id}>
            <SeatImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvlNhh18sqYF2GvooJM_8PoIxuDkzqIgdlg&usqp=CAU" alt="Seat"/>
        </Item>
    )
}
