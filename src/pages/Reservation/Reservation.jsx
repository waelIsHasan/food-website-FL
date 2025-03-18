import "./Reservation.css";
import res1 from "./res1.jpg";
import Button from "../../components/Button";
import { useState } from "react";
import ReservationConfirmation from "./ConfirmReservation";
import ReservationCancel from "./CancelReservation";
export default function Reservation() {
  const initState = { time: "", date: "", partySize: 0 };
  var [reservation, setReservation] = useState(initState);
  var [isCancel, setIsCancel] = useState(false);
  var [isDialogConfVisiable, setConfVisiable] = useState(false);
  function timeChangeHandle(event) {
    setReservation({ ...reservation, time: event.target.value });
  }
  function dateChangeHandle(event) {
    setReservation({ ...reservation, date: event.target.value });
  }
  function partySizeChangeHandle(event) {
    setReservation({ ...reservation, partySize: event.target.value });
  }
  function Submit(event) {
    event.preventDefault();
    setConfVisiable(!isDialogConfVisiable);
    // setIsCancel(!isCancel);
  }

  function handelIsvisiable(){
    setConfVisiable(!isDialogConfVisiable);
    setIsCancel(!isCancel)
  }
  function handleCancel(){
    setIsCancel(!isCancel)
  }
  return (
    <div>
      <div className="reservation">
        <img src={res1} alt="" />
        <div className="book-table">
          <h1>Book a Table</h1>
          <form className="form-reservation" action="" onSubmit={Submit}>
            <input
              value={reservation.date}
              type="date"
              placeholder="Date"
              onChange={dateChangeHandle}
            />
            <input
              value={reservation.time}
              type="time"
              placeholder="Time"
              onChange={timeChangeHandle}
            />
            <input
              value={reservation.partySize}
              type="number"
              placeholder="Party Size"
              onChange={partySizeChangeHandle}
            />
            <Button width="large" name="Book Now" />
          </form>
        </div>
      </div>
      {isDialogConfVisiable && (
        <ReservationConfirmation
          onClick={handelIsvisiable}
          date={reservation.date}
          time={reservation.time}
          partySize={reservation.partySize}
        />
      )}

      {isCancel && (
        <ReservationCancel
          onClick={handleCancel}
          date={reservation.date}
          time={reservation.time}
          partySize={reservation.partySize}
        />
      )}
    </div>
  );
}
