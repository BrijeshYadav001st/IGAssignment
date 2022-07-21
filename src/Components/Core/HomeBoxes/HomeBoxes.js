import React from "react";
import MenuAll from '../../image/allmenu.svg'
import Menu from '../../image/menu.svg'
import Cards from "../Cards/Cards";

import Vector from '../../image/vector.svg'

const HomeBoxes = () => {
    return (
        <>

            <div className=''>

                <nav className="font-sans flex justify-between border-b-2 items-center  md:flex">
                    <div className="text-avermass-black-600 text-xl font-sans cursor-pointer flex">
                        <span className="mr-2 ml-5"><img alt="Menu1" src={MenuAll} /></span>
                        <span>All</span>

                    </div>
                    <div className="flex cursor-pointer text-avermass-black-600 text-xl font-sans ">
                        <span className="mr-2"><img alt="Menu1" src={Menu} /></span>
                        <span>Menu 1</span>

                    </div>
                    <div className="flex cursor-pointer text-avermass-black-600 text-xl font-sans">
                        <span className="mr-2"><img alt="Menu1" src={Menu} /></span>
                        <span>Menu 2</span>

                    </div>
                    <div className="flex cursor-pointer text-avermass-black-600 text-xl font-sans">
                        <span className="mr-2"><img alt="Menu1" src={Menu} /></span>
                        <span>Menu 3</span>


                    </div>
                    <div className="flex cursor-pointer text-avermass-black-600 text-2xl font-sans">
                        <span className="mr-2"><img alt="Menu1" src={Menu} /></span>
                        <span>Menu 4</span>

                    </div>
                    <div className="cursor-pointer bg-gray-300">
                        <div className="flex justify-center h-20 w-20 bg-gray-200">
                            <span className="items-center flex justify-center"><img alt="Menu5" src={Vector} /></span>
                        </div>
                    </div>

                </nav>
                

            </div>

            <section className="text-black">
                <Cards />
            </section>
        </>

    )
}
export default HomeBoxes