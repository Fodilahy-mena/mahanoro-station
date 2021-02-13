import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Frame = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    a {
        text-decoration: none;
    }
`;

export default function Header() {
    return (
        <header>
            <Frame>
                <Link to="/">
                    <h1>🚌 Mahanoro Station</h1>
                </Link>
                <Link to="/account">
                    <button>My account</button>
                </Link>
            </Frame>
        </header>
    )
}
