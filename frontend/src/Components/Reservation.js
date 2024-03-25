// user_id, res_id, date, time table rows/id's
import React, { useState } from "react";

function Reservation() {
  // State variables to store form data
    const [user_Id, setUserId] = useState('');
    const [res_Id, setResId] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    
  // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can send the form data to your backend
        const reservationData = { user_Id, res_Id, date, time };
        console.log('Reservation data:', reservationData);
        // Reset form fields
        setUserId('');
        setResId('');
        setDate('');
        setTime('');
    };

    return (
        <div>
        <h2>Would you like to place a Reservation?</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </label>
            <br />
            <label>
            Time:
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </label>
            <br />
            <label className="hidden">
            User ID:
            <input type="text" value={user_Id} onChange={(e) => setUserId(e.target.value)} required/>
            </label>
            <br />
            <label className="hidden">
            Reservation ID:
            <input type="text" value={res_Id} onChange={(e) => setResId(e.target.value)} required/>
            </label>
            <button type="submit">Submit</button>
        </form>


    </div>
    );
}



export default Reservation;