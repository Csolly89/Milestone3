import React, { useState, useTransition } from 'react'

import TabButton from "../Components/TabButton"
import apps from "../Utilities/apps";
import deserts from "../Utilities/deserts"
import entrees from "../Utilities/entrees"
import salads from "../Utilities/salads"
import sides from "../Utilities/sides"

const TAB_DATA = [
    {
        Title: 'Appetizers',
        id: 'apps',
        content: (
            <ul className='list-disc pl-2'>
                <h2>Appetizers</h2>
                {apps.map((item,index) => (
                        <li key={index}>
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
                    <li key={index}>
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
                    <li key={index}>
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
                    <li key={index}>
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
                    <li key={index}>
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

function Menu() {
    const [tab,setTab] = useState('apps')
    const [isPending,startTransitions] = useTransition()

    const handleTabChange = (id) => {
        startTransitions(() => {
            setTab(id)
        })
    }
    return (
        <div>
            {/* tabs for different menu sections */}
            <div className='flex flex-col my-12 py-5'>
                <TabButton selectTab={() => handleTabChange('apps')} active={tab === 'apps'}>Appetizers</TabButton>
                <TabButton selectTab={() => handleTabChange('salads')} active={tab === 'salads'}>Salads</TabButton>
                <TabButton selectTab={() => handleTabChange('entrees')} active={tab === 'entrees'}>Entrees</TabButton>
                <TabButton selectTab={() => handleTabChange('sides')} active={tab === 'sides'}>Sides</TabButton>
                <TabButton selectTab={() => handleTabChange('deserts')} active={tab === 'deserts'}>Deserts</TabButton>
            </div>
            {/* card for menu items */}
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                {/* <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">{}</h2>
                    {TAB_DATA.find((t) => t.id === tab).content}
                    <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;

