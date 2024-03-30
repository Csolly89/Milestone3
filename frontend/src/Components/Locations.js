import Steak from '../img/tomahawk.jpg'

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
        <>
            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center sm:text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight ">
                            Hours of Operation
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
                        <div>
                            <img className="w-full mx-auto sm:max-w-xs h-full object-contain" src={Steak} alt="Tomahawk steak" />
                        </div>
                        <div>
                            <div className="card w-96 bg-neutral text-neutral-content flex sm:mx-auto">
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Locations;