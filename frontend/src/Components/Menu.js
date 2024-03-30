import React, { useState, useTransition } from 'react'
import TabButton from "../Components/TabButton"
import TAB_DATA from '../Utilities/TabData'
import SpecData from '../Utilities/SpecData'

function Menu() {
    // menu tab
    const [tab,setTab] = useState('apps')
    // specials tab
    const [sTab, setSTab] = useState('monday')
    const [isPending,startTransitions] = useTransition()

    const handleTabChange = (id) => {
        startTransitions(() => {
            setTab(id)
        })
    }
    const sHandleTabChange = (id) => {
        startTransitions(() => {
            setSTab(id)
        })
    }

    return (
        <section>
            <div classname="flex items-center justify-center h-screen ">
                <div className="flex w-min h-100 py-12 my-10 mx-auto">
                    {/* tabs for different menu sections */}
                    <div className="grid w-15 pt-12 pb-12 card bg-base-300 rounded-box place-items-center sm:flex-row">
                        <TabButton defaultValue="apps" selectTab={() => handleTabChange('apps')} active={tab === 'apps'}>Appetizers</TabButton>
                        <TabButton defaultValue="salads" selectTab={() => handleTabChange('salads')} active={tab === 'salads'}>Salads</TabButton>
                        <TabButton defaultValue="entrees" selectTab={() => handleTabChange('entrees')} active={tab === 'entrees'}>Entrees</TabButton>
                        <TabButton defaultValue="sides" selectTab={() => handleTabChange('sides')} active={tab === 'sides'}>Sides</TabButton>
                        <TabButton defaultValue="deserts"  selectTab={() => handleTabChange('deserts')} active={tab === 'deserts'}>Deserts</TabButton>
                    </div>
                    <div className="divider divider-horizontal divider-error">|</div>
                    {/* card for menu items */}
                    <div className="flex flex-grow card bg-base-300 rounded-box place-items-center">
                        <div className="card w-96 bg-base-100 shadow-xl ">
                            {TAB_DATA.find((t) => t.id === tab).content}
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                </div>
                {/* specials menu */}  
                <div className="">
                    <div className="flex-row mb-2 card w-full bg-base-100 shadow-xl mt-4 md:mt-8 justify-center md:gap-4 lg:gap-6">
                        <TabButton defaultValue="monday" selectTab={() => sHandleTabChange('monday')} active={sTab === 'Monday'}>Monday</TabButton>
                        <TabButton defaultValue="tuesday" selectTab={() => sHandleTabChange('tuesday')} active={sTab === 'Tuesday'}>Tuesday</TabButton>
                        <TabButton defaultValue="wednesday" selectTab={() => sHandleTabChange('wednesday')} active={sTab === 'Wednesday'}>Wednesday</TabButton>
                        <TabButton defaultValue="thursday" selectTab={() => sHandleTabChange('thursday')} active={sTab === 'Thursday'}>Thursday</TabButton>
                        <TabButton defaultValue="friday" selectTab={() => sHandleTabChange('friday')} active={sTab === 'Friday'}>Friday</TabButton>
                        <TabButton defaultValue="saturday" selectTab={() => sHandleTabChange('saturday')} active={sTab === 'Saturday'}>Saturday</TabButton>
                    </div>
                    {/* specials content display */}
                    <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto">
                        <div className="card-body">
                            <h2 className="card-title">{}</h2>
                            {SpecData.find((s) => s.id === sTab).content}
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Menu;