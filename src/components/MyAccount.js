import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

`;

const BookingBase = styled.div`
    display: flex;
    flex-direction: column;
`;
export default function MyAccount({passenger, bookings}) {
    console.log(passenger)
    console.log("bookings",bookings)
    return (
        <>
            <ProfileFrame>
                <ProfileImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC" alt="Your profile account"/>
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
                            <i>🚕</i>
                            <BookingBase>
                                <span>{booking.destination}</span>
                                <span>{new Date(booking.departureTime).toLocaleDateString()}, {new Date(booking.departureTime).getHours()}:{new Date(booking.departureTime).getMinutes()}</span>
                            </BookingBase>
                            <BookingBase>
                                <span>{booking.seats.length}</span>
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
