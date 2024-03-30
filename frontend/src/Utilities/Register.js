import React from "react"
import Ribs from "../img/ribs.jpg"
import { useState } from "react"

// need first name, last name, phone number, zipcode

function Register(props) {

    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: '',
        zipcode: ''
    })



    async function handleSubmit(e) {
        e.preventDefault()

        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(response => {
                //we got the user save it to local storage
                localStorage.setItem('currentUser', JSON.stringify(response.data));
                //redirect to home
                window.location.href = '/login'
                console.log("New user created!!")
            })
    }

    return (
        <>
            <section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center justify-center px-4 py-5 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up to Celebration</h2>
                            <p>Already have an account? <button onClick={() => props.onFormSwitch('login')} className="bg-blue-700 px-1"> Login!</button></p>

                            <form name="myForm" action="#" onSubmit={handleSubmit} className="mt-3">
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> First Name </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="first_name"
                                                value={user.first_name}
                                                onChange={(e) => setUser({ ...user, first_name: e.target.value })}
                                                placeholder="Enter your First name"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Last Name </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="last_name"
                                                value={user.last_name}
                                                onChange={(e) => setUser({ ...user, last_name: e.target.value })}
                                                placeholder="Enter your Last name"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Phone Number </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="phone_number"
                                                value={user.phone_number}
                                                onChange={(e) => setUser({ ...user, phone_number: e.target.value })}
                                                placeholder="Phonenumber"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Zipcode </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="zipcode"
                                                value={user.zipcode}
                                                onChange={(e) => setUser({ ...user, zipcode: e.target.value })}
                                                placeholder="Zipcode"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Email address </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="email"
                                                value={user.email}
                                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                                placeholder="Enter email to get started"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Password </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="password"
                                                value={user.password}
                                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                                placeholder="Enter your password"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <input type="checkbox" name="agree" id="agree" className="w-5 h-5 text-blue-600 bg-white border-gray-200 rounded" />

                                        <label htmlFor="agree" className="ml-3 text-sm font-medium text-gray-500">
                                            I agree to Sizzle House's <button href="#" title="" className="text-blue-600 hover:text-blue-700 hover:underline">Terms of Service</button> and <button href="#" title="" className="text-blue-600 hover:text-blue-700 hover:underline">Privacy Policy</button>
                                        </label>
                                    </div>

                                    <div>
                                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                            Create free account
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className="mt-3 space-y-3">
                                <button
                                    type="button"
                                    className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                >
                                    <div className="absolute inset-y-0 left-0 p-4">
                                        <svg className="w-6 h-6 text-rose-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                            ></path>
                                        </svg>
                                    </div>
                                    Sign up with Google
                                </button>

                                <button
                                    type="button"
                                    className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                >
                                    <div className="absolute inset-y-0 left-0 p-4">
                                        <svg className="w-6 h-6 text-[#2563EB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                        </svg>
                                    </div>
                                    Sign up with Facebook
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
                        <div>
                            <img className="w-full mx-auto" src={Ribs} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;