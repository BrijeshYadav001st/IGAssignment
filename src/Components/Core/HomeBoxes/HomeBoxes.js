import React from "react";
import MenuAll from '../../image/allmenu.svg'
import Menu from '../../image/menu.svg'
import Cards from "../Cards/Cards";

import Vector from '../../image/vector.svg'

const HomeBoxes = () => {
    return (
        <>
            <div className=''>

                <div className="font-sans flex justify-between border-b-2 items-center">
                    
                    <div className="text-avermass-black-600 text-xl font-sans cursor-pointer flex justify-around items-center">
                        <div className="mr-2 ml-5"><img alt="Menu1" src={MenuAll} /></div>
                        <div>All</div>

                    </div>
                    <div className="flex cursor-pointer text-avermass-black-600 text-xl font-sans justify-around items-center ">
                        <div className="mr-2"><img alt="Menu1" src={Menu} /></div>
                        <div>Menu 1</div>

                    </div>

                    <div className="flex cursor-pointer text-avermass-black-600 text-xl font-sans justify-around items-center">
                        <div className="mr-2"><img alt="Menu1" src={Menu} /></div>
                        <div>Menu 2</div>

                    </div>
                    <div className="flex cursor-pointer text-avermass-black-600 text-xl font-sans justify-around items-center">
                        <span className="mr-2"><img alt="Menu1" src={Menu} /></span>
                        <span>Menu 3</span>


                    </div>
                    <div className="flex cursor-pointer text-avermass-black-600 text-xl font-sans justify-around items-center">
                        <div className="mr-2"><img alt="Menu1" src={Menu} /></div>
                        <div>Menu 4</div>

                    </div>
                    <div className="cursor-pointer bg-gray-300">
                        <div className="flex justify-center h-16 w-16 bg-gray-200">
                            <span className="items-center flex justify-center"><img alt="Menu5" src={Vector} /></span>
                        </div>
                    </div>

                </div>
                
                

            </div>

            <section className="container mx-auto font-sans  lg:grid grid-cols-2 gap-3 flex justify-center container  md:items-center">
                <Cards />
            </section>
        </>

    )
}
export default HomeBoxes