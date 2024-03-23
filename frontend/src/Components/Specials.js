import dailySpecials from "../Utilities/dailySpecials";

function Specials() {
    return (
        <div>
            {Object.entries(dailySpecials).map(([day, special]) => (
        <div key={day}>
            <h2>{day}</h2>
            <p><strong>{special.name}</strong></p>
            <p>Description: {special.description}</p>
            <p>Price: ${special.price.toFixed(2)}</p>
        </div>
        ))}
    </div>
    );
}


export default Specials;