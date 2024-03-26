import React, { useState } from 'react';

function Career() {
  // State variables to store form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [resume, setResume] = useState('');

  // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
    // Here you can process the form data, such as sending it to a server or displaying it
        console.log('Form submitted:', { name, email, phoneNumber, resume });
    // Reset form fields
        setName('');
        setEmail('');
        setPhoneNumber('');
        setResume('');
    };

    return (
        // <div>
        // <h2>Job Application Form</h2>
        // <form onSubmit={handleSubmit}>
        //     <label> Name:
        //         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        //     </label>
        //     <br />
        //     <label> Email:
        //         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        //     </label>
        //     <br />
        //     <label> Phone Number:
        //         <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        //     </label>
        //     <br />
        //     <label> Resume/CV:
        //         <input type="file" onChange={(e) => setResume(e.target.files[0])} accept=".pdf,.doc,.docx" required />
        //     </label>
        //     <br />
        //         <button type="submit">Submit</button>
        //     </form>
        // </div>

<section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Want to join the Team?</h2>
        <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Send us your information</p>
    </div>

    <div class="relative max-w-md mx-auto mt-8 md:mt-16">
        <div class="overflow-hidden bg-white rounded-md shadow-md">
            <div class="px-4 py-6 sm:px-8 sm:py-7">
                <form >
                    <div class="space-y-5">
                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> First name </label>
                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>

                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Enter your First Name"
                                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                />
                            </div>
                        </div>
                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Last name </label>
                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>

                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Enter your Last Name"
                                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                />
                            </div>
                        </div>

                        

                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>

                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Enter email to get started"
                                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Resume/Cv: </label>
                                <input type="file" onChange={(e) => setResume(e.target.files[0])} accept=".pdf,.doc,.docx" required />
                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center">
                            <input type="checkbox" name="agree" id="agree" class="w-5 h-5 text-green-500 bg-white border-gray-200 rounded" checked />

                            <label for="agree" class="ml-3 text-sm font-medium text-gray-500">
                                I agree to Postcraft’s <a href="#" title="" class="text-blue-600 hover:text-blue-700 hover:underline">Terms of Service</a> and <a href="#" title="" class="text-blue-600 hover:text-blue-700 hover:underline">Privacy Policy</a>
                            </label>
                        </div>

                        <div>
                            <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                Submit Application
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</section>

    );
}

export default Career;
