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
        <div>
        <h2>Job Application Form</h2>
        <form onSubmit={handleSubmit}>
            <label> Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <br />
            <label> Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <br />
            <label> Phone Number:
                <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </label>
            <br />
            <label> Resume/CV:
                <input type="file" onChange={(e) => setResume(e.target.files[0])} accept=".pdf,.doc,.docx" required />
            </label>
            <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Career;
