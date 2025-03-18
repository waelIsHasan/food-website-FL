import React, { useState } from "react";
import Button from "../../components/Button";
import img1 from './res1.jpg'
export default function ReservationConfirmation({date , time , partySize , onClick}) {
 

  return (
   <div className="overlay">
    <div className="reservation-confirmation">
      <h1>Reservation</h1>
      <div className="res-title">
        <h2>Reservation has been confirmed</h2>
        <ul>
          <li>
            <p>the confirmation result has been sent to your email</p>
          </li>
          <li>
            <p>Booking ID : #32933</p>
          </li>
        </ul>
      </div>
      <div className="res-content">
        <img src={img1} alt="" />
        <div className="res-details">
          <h1>Reservation detail</h1>
          <ul>
            <li><p>{date}</p></li>
            <li><p>{time}</p></li> 
            <li>{partySize} people Standar seating</li>
          </ul>
        </div>
        <div className="res-Buttons">
          <Button width={"meduim"} name="Modify" />
          <Button onClick={onClick} width={"meduim"} name="Cancel"/>
        </div>
      </div>
    </div>
    </div>
  );
}
