import React from "react"

function Register(props) {
    return ( 
        <>
            <form action="/user" method="POST">
                <label htmlFor="userName">User Name:</label>
                <input type="userName" name="userName" id="userName" required placeholder="User Name" />

                <label htmlFor="name">Password:</label>
                <input type="password" name="password" id="password" required placeholder=" *******" />

                <button type="submit">Register</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account?</button>
        </>
    );
}

export default Register;