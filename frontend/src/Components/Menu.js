'use client'
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
                        <span>${item.price.toFixed(2)}</span>
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
                        <span>${item.price.toFixed(2)}</span>
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
                        <span>${item.price.toFixed(2)}</span>
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
                        <span>${item.price.toFixed(2)}</span>
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
            <div>
                <TabButton selectTab={() => handleTabChange('apps')} active={tab === 'apps'}>Appetizers</TabButton>
                <TabButton selectTab={() => handleTabChange('salads')} active={tab === 'salads'}>Salads</TabButton>
                <TabButton selectTab={() => handleTabChange('entrees')} active={tab === 'entrees'}>Entrees</TabButton>
                <TabButton selectTab={() => handleTabChange('sides')} active={tab === 'sides'}>Sides</TabButton>
                <TabButton selectTab={() => handleTabChange('deserts')} active={tab === 'deserts'}>Deserts</TabButton>
            </div>
            <div className='mt-8 '>
                {TAB_DATA.find((t) => t.id === tab).content}
            </div>
        </div>
    )
}

export default Menu;

