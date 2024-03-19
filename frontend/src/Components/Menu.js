import apps from "../Utilities/apps";
import deserts from "../Utilities/deserts"
import entrees from "../Utilities/entrees"
import salads from "../Utilities/salads"
import sides from "../Utilities/sides"


function Menu() {
    return (
        <article>
            <h2>Appetizers</h2>
            {apps.map((item,index) => (
                        <li key={index}>
                            <strong>{item.name}</strong>:
                            <br></br>
                            <span>{item.description}</span>
                            <br></br>
                            <span>${item.price.toFixed(2)}</span>
                        </li>
                    ))
                }
            <h2>Salads</h2>
            {salads.map((item,index) => (
                        <li key={index}>
                            <strong>{item.name}</strong>:
                            <br></br>
                            <span>{item.description}</span>
                            <br></br>
                            <span>${item.price.toFixed(2)}</span>
                        </li>
                    ))
                }
            <h2>Entrees</h2>
            {entrees.map((item,index) => (
                        <li key={index}>
                            <strong>{item.name}</strong>:
                            <br></br>
                            <span>{item.description}</span>
                            <br></br>
                            <span>${item.price.toFixed(2)}</span>
                        </li>
                    ))
                }
            <h2>Sides</h2>
            {sides.map((item,index) => (
                        <li key={index}>
                            <strong>{item.name}</strong>:
                            <br></br>
                            <span>{item.description}</span>
                            <br></br>
                            <span>${item.price.toFixed(2)}</span>
                        </li>
                    ))
                }
            <h2>Deserts</h2>
            {deserts.map((item,index) => (
                        <li key={index}>
                            <strong>{item.name}</strong>:
                            <br></br>
                            <span>{item.description}</span>
                            <br></br>
                            <span>${item.price.toFixed(2)}</span>
                        </li>
                    ))
                }
        </article>
    )

}

export default Menu;