// user_id, res_id, date, time table rows/id's
import React, { useState } from "react";
// image for reservation confirmation card
// import Salad from '../img/caesar.jpg'

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
    // sample fetch to see if theres a reservation already in place
    // function ReviewsList() {
    //     const [reviews, setReviews] = useState([]);
    
    //     // Fetch reviews from the backend
    //     useEffect(() => {
    //         fetch('http://localhost:8080/reviews/all')
    //             .then(response => {
    //                 if (!response.ok) {
    //                     throw new Error(`HTTP error! Status: ${response.status}`);
    //                 }
    //                 return response.json();
    //             })
    //             .then(data => setReviews(data))
    //             .catch(error => console.error('Error fetching reviews:', error.message));
    //     }, []);
    

    return (
        <>
        <section onSubmit={handleSubmit} className="py-10 bg-white sm:py-16 lg:py-24">
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
                    <br />
                    <label>Reservation ID:
                    <input className="disabled:opacity-75" type="text" value={res_Id} onChange={(e) => setResId(e.target.value)} required/> 
                    </label>
                    <label className="hidden"> User ID:
                    <input type="text" value={user_Id} onChange={(e) => setUserId(e.target.value)} required/>
                    </label>
                    {/* make hardcoded to id 1 and disabled */}
                </div>
                <button type="submit" href="#" title="" className="inline-flex items-center justify-center w-full px-12 py-4 mt-6 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"> Submit</button>
            </div>
        </div>
    </section>
    {/* card for reservation details and confirmation */}
        {/* <div className=" mx-auto flex card w-96 bg-base-100 shadow-xl image-full">
            <figure><img class="object-cover w-full md:object-left md:scale-150 md:origin-top-left place-items-center mx-auto justify-center " src={Salad} alt="background salad" /></figure>
            <div className="card-body">
                <h2 className="card-title"></h2>
                <p></p>
            </div>
        </div> */}

    </>
    );
}



export default Reservation;