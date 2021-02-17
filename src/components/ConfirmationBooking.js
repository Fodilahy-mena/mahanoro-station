import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.section`
    background: rgba(255, 255, 255, 0.8);
    position: fixed;
    transition: all;
    height: 100vh;
    width: 100vw;
    transition: all 0.25s;
    display: grid;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    opacity: 0;
    left: 0;
`;

export const Base = styled.div`
    display: flex;
    flex-direction: column;
    transition: all 0.2s;

    max-height: 593px;
    background: #FFFFFF;
    border: 5px solid #E53170;
    box-sizing: border-box;
    max-width: 450px;

    padding: 32px;
    max-width: 450px;
    width: 773px;
    height: 450px;
    position: relative;
    bottom: 2rem;
    text-align: center;
`;

const ButtonToAccount = styled.button`
    cursor: pointer;
`;

const Close = styled.p`
    align-self: flex-end;
`;

export default function ConfirmationBooking({setShowModal,showModal, booking, updatedTrip}) {
    return (
        <Container className={showModal && 'open'}>
            <Base>
                <Close onClick={() => setShowModal(false)}>x</Close>
                <h2>✔  Booking confirmed!</h2>
                <p>Thank you for trusting our services. Your booking has been added to your account. You can review it there.</p>
                <Link to="/account">
                    <ButtonToAccount onClick={() => {
                        booking(updatedTrip)
                        
                    }}>Check your account</ButtonToAccount>
                </Link>
            </Base>
        </Container>
    )
}
