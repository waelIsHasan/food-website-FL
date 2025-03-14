import './Reservation.css'
import res1 from './res1.jpg'
import Button from '../../components/Button';
import { useState } from 'react';
export default function Reservation(){
    const initState = {time : "" , date :"" , partySize : 0};
    var [reservation , setReservation] = useState(initState);

    function timeChangeHandle(event){
        setReservation({...reservation , time : event.target.value})
    }
    function dateChangeHandle(event){
        setReservation({...reservation , date : event.target.value})
    }
    function partySizeChangeHandle(event){
        setReservation({...reservation , partySize : event.target.value})
    }
    function Submit(event){
        event.preventDefault()
        
    }

    return (
        <div className='reservation'>
            <img src={res1} alt="" />
            <div className='book-table'>
                <h1>Book a Table</h1>
                <form className="form-reservation" action="" onSubmit={Submit}>
                    <input value={reservation.date} type='date' placeholder='Date' onChange={dateChangeHandle}/>
                    <input value={reservation.time} type='time' placeholder='Time' onChange={timeChangeHandle}/>
                    <input value={reservation.partySize} type='number' placeholder='Party Size' onChange={partySizeChangeHandle}/>
                    <Button width="large" name="Book Now"/>
                </form>
            </div>
        </div>
    );

}