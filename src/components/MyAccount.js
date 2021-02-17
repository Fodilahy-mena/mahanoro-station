import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Bus from '../icons/bus.svg';
import UseInterfaceSvg from '../icons/user-interface.svg';
const ProfileFrame = styled.div`
    display: flex;
    flex-direction: row;
    max-width: max-content;
    margin-left: auto;
    margin-right: auto;
`;

const ProfileImage = styled.img`
    width: 134px;
`;

const Base = styled.div`
    margin-left: 70px;
`;
const FormAccount = styled.form`
    display: flex;
    flex-direction: column;
`;

const AccountFeature = styled.section`
    display:flex;
    grid-template-columns: auto auto;
    gap: 75px;
    max-width: max-content;
    margin-left: auto;
    margin-right: auto;
`;
const BookingList = styled.ul`
    list-style: none;
    padding: 0;
`;
const BookingItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;
    margin-bottom: 2rem;

`;

const BusImg = styled.img`
    max-width: 40px;
`;

const BookingBase = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
`;
export default function MyAccount({passenger, bookings}) {
    console.log(passenger)
    console.log("bookings",bookings)
    return (
        <>
            <ProfileFrame>
                <ProfileImage src={UseInterfaceSvg} alt="Your profile account"/>
                <Base>
                    <h2>My Account</h2>
                    <p>{passenger.passengerFirstName} {passenger.passengerLastName}</p>
                </Base>
            </ProfileFrame>
            <AccountFeature>
                <div>
                    <h3>My personnal informations:</h3>
                    <FormAccount>
                        <label>First name</label>
                        <input type="text" 
                        value={passenger.passengerFirstName} 
                        onChange={(e) => e}/>
                        <label>Last name</label>
                        <input type="text" 
                        value={passenger.passengerLastName}
                        onChange={(e) => e}/>
                        <label>Phone number</label>
                        <input type="text" 
                        value={passenger.passengerPhoneNumber}
                        onChange={(e) => e}/>
                        <button>Update</button>
                    </FormAccount>
                </div>
                <div>
                    <h3>My bookings:</h3>
                    <BookingList>
                        {bookings.length > 0 ?
                            
                        bookings.map((booking, index )=> (
                        <BookingItem key={booking.id + index}>
                            <BusImg src={Bus} alt="Bus image"/>
                            <BookingBase>
                                <span>{booking.destination}</span>
                                <span>{new Date(booking.departureTime).toLocaleDateString()}, {new Date(booking.departureTime).getHours()}:{new Date(booking.departureTime).getMinutes()}</span>
                            </BookingBase>
                            <BookingBase>
                                <span>{booking.seats.length} seat{booking.seats.length > 1 && 's'}</span>
                                <span>{booking.price * booking.seats.length} Ar</span>
                            </BookingBase>
                            <button>Cancel</button>
                        </BookingItem>))
                        :
                        <p>You have no booking yet. <Link to="/">Please start booking!</Link></p>
                        }
                        {bookings.length > 0 && <Link to="/">Book more?</Link>}
                    </BookingList>
                </div>
            </AccountFeature>
        </>
    )
}
