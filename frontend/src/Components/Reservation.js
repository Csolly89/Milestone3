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
      // original basic Reservation form
    //     <div>
    //     <h2>Would you like to place a Reservation?</h2>
    //     <form onSubmit={handleSubmit}>
    //         <label>
    //         Date:
    //         <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
    //         </label>
    //         <br />
    //         <label>
    //         Time:
    //         <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
    //         </label>
    //         <br />
    //         <label className="hidden">
    //         User ID:
    //         <input type="text" value={user_Id} onChange={(e) => setUserId(e.target.value)} required/>
    //         </label>
    //         <br />
    //         <label className="hidden">
    //         Reservation ID:
    //         <input type="text" value={res_Id} onChange={(e) => setResId(e.target.value)} required/>
    //         </label>
    //         <button type="submit">Submit</button>
    //     </form>
    // </div>
    <section onSubmit={handleSubmit} class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Reserve your time for dinner!</h2>
        </div>

        <div class="max-w-sm mx-auto mt-8 sm:mt-16">
            <div class="space-y-3">
                <div class="overflow-hidden transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-50">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center">
                            <label> Date:
                                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                            </label>
                        </div>
                    </div>
                </div>

                <div class="overflow-hidden transition-all duration-200 bg-white border-2 border-blue-600 rounded-md hover:bg-gray-50">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center">
                        <label> Time:
                            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                        </label>
                        </div>
                    </div>
                </div>
                <label className="hidden"> User ID:
                <input type="text" value={user_Id} onChange={(e) => setUserId(e.target.value)} required/>
                </label>
                <br />
                <label className="hidden">Reservation ID:
                <input type="text" value={res_Id} onChange={(e) => setResId(e.target.value)} required/>
                </label>
            </div>
            <button type="submit" href="#" title="" class="inline-flex items-center justify-center w-full px-12 py-4 mt-6 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"> Submit</button>
        </div>
    </div>
</section>

    );
}



export default Reservation;