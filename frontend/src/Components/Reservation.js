import React, { useState, useContext } from "react";

function Reservation() {
    // State variables to store form data
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    let currentUser = '';

    try {
        const localUser = localStorage.getItem('currentUser');
        currentUser = JSON.parse(localUser);
    } catch (e) {
        console.log('Un-able to parse user');
    }



    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // debugger;

        //create the user reservation
        const reservationData = {
            date,
            time,
            user_id: currentUser.user_id,
            rest_id: 1
        };
        fetch(`http://localhost:5000/reservations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            },
            body: JSON.stringify(reservationData)
        })
            .then(res => res.json())
            .then(response => {
                //redirect home after saving the reservation
                window.location.href = '/'
            console.log("Reservation confirmed!!")
            })
        // Reset form fields
        setDate('');
        setTime('');
    };

    return (
        <>
            {!currentUser &&
                <section className="py-10 bg-white sm:py-16 lg:py-24">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-2xl lg:text-3xl">Please sign in to make a Reservation</h2>
                </section>}
            {currentUser &&
                <section className="py-10 bg-white sm:py-16 lg:py-24">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Reserve your time for dinner!</h2>
                        </div>

                        <div className="max-w-sm mx-auto mt-8 sm:mt-16">
                            <div className="space-y-3">
                                <div className="overflow-hidden transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-50">
                                    <div className="px-4 py-5 sm:p-6">
                                        <div className="flex items-center">
                                            <label> Date:
                                                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="overflow-hidden transition-all duration-200 bg-white border-2 border-blue-600 rounded-md hover:bg-gray-50">
                                    <div className="px-4 py-5 sm:p-6">
                                        <div className="flex items-center">
                                            <label> Time:
                                                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleSubmit} href="#" title="" className="inline-flex items-center justify-center w-full px-12 py-4 mt-6 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"> Submit</button>
                        </div>
                    </div>
                </section>
            }

        </>

    );
}



export default Reservation;