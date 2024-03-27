const hoursOfOperation = {
    Monday: {
        openingTime: "10:00 AM",
        closingTime: "9:00 PM"
    },
    Tuesday: {
        openingTime: "10:00 AM",
        closingTime: "9:00 PM"
    },
    Wednesday: {
        openingTime: "10:00 AM",
        closingTime: "9:00 PM"
    },
    Thursday: {
        openingTime: "10:00 AM",
        closingTime: "9:00 PM"
    },
    Friday: {
        openingTime: "10:00 AM",
        closingTime: "10:00 PM"
    },
    Saturday: {
        openingTime: "11:00 AM",
        closingTime: "10:00 PM"
    },
    Sunday: {
        openingTime: "11:00 AM",
        closingTime: "8:00 PM"
    }
};

function Locations() {
    return (
        <div className="card w-96 bg-neutral text-neutral-content flex items-center justify-center my-20 mx-auto">
            <div className="card-body items-center text-center ">
                {Object.entries(hoursOfOperation).map(([day, time]) => (
                <div key={day}>
                    <h2 className="card-title">{day}</h2>
                    <p>Open: {time.openingTime}</p>
                    <p>Closing: {time.closingTime}</p>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Locations;