import React from "react";

import Navbar from "../Core/Navbar/Navbar";
import PicBody from "../Core/PicBody/PicBody";
import HomeBoxes from "../Core/HomeBoxes/HomeBoxes";
import Cookies from "../Core/Cookies/Cookies";



const Home = () => {
    return(
        <div className="gray-100">
            <Navbar />
            <PicBody />
            <HomeBoxes />
            <Cookies  />
            

        </div>
    )
}
export default Home