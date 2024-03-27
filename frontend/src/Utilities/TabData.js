import apps from "./apps";
import deserts from "./deserts"
import entrees from "./entrees"
import salads from "./salads"
import sides from "./sides"

const TAB_DATA = [
    {
        Title: 'Appetizers',
        id: 'apps',
        content: (
            <ul className='list-disc pl-2'>
                <h2>Appetizers</h2>
                {apps.map((item,index) => (
                        <li className="list-none" key={index}>
                            <strong>{item.name}</strong>:
                            <br></br>
                            <span>{item.description}</span>
                            <br></br>
                            <span>${item.price}</span>
                            {/* example button if we get cart up and running */}
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                        </li>
                    ))
                }
            </ul>
        )
    },

    {
        Title: 'Salads',
        id: 'salads',
        content: (
            <ul className='list-disc pl-2'>
                {salads.map((item,index) => (
                    <li className="list-none"  key={index}>
                        <strong>{item.name}</strong>:
                        <br></br>
                        <span>{item.description}</span>
                        <br></br>
                        <span>${item.price}</span>
                    </li>
                    ))
                }
            </ul>
        )
    },

    {
        Title: 'Entrees',
        id: 'entrees',
        content: (
            <ul className='list-disc pl-2'>
                {entrees.map((item,index) => (
                    <li className="list-none"  key={index}>
                        <strong>{item.name}</strong>:
                        <br></br>
                        <span>{item.description}</span>
                        <br></br>
                        <span>${item.price}</span>
                    </li>
                    ))
                }
            </ul>
        )
    },

    {
        Title: 'Side Dishes',
        id: 'sides',
        content: (
            <ul className='list-disc pl-2'>
                {sides.map((item,index) => (
                    <li className="list-none"  key={index}>
                        <strong>{item.name}</strong>:
                        <br></br>
                        <span>{item.description}</span>
                        <br></br>
                        <span>${item.price}</span>
                    </li>
                    ))
                }
            </ul>
        )
    },

    {
        Title: 'Deserts',
        id: 'deserts',
        content: (
            <ul className='list-disc pl-2'>
                {deserts.map((item,index) => (
                    <li className="list-none"  key={index}>
                        <strong>{item.name}</strong>:
                        <br></br>
                        <span>{item.description}</span>
                        <br></br>
                        <span>${item.price}</span>
                    </li>
                    ))
                }
            </ul>
        )
    }
]

export default TAB_DATA