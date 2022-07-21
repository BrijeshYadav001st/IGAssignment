import React from "react";

import Navbar from "../Core/Navbar/Navbar";
import PicBody from "../Core/PicBody/PicBody";
import HomeBoxes from "../Core/HomeBoxes/HomeBoxes";

const Home = () => {
    return(
        <div className="gray-100">
            <section>
                <Navbar />
            </section>
            <section>
                <PicBody />
            </section>
            <section>
                <HomeBoxes />
            </section>
            <section className=" bg-gray-500 h-16 text-2xl flex justify-between items-center text-white">
                <div></div>
                <div> Launch Your Own CBD Business</div>
                <div className="pr-20 cursor-pointer"> X </div>
            </section>
        </div>
    )
}
export default Home