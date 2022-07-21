import React from "react";
import Pic1 from "../../image/img1.svg"
import Pic2 from "../../image/img2.svg"
import Pic3 from "../../image/img3.svg"

const PicBody = () => {
    return(
        <span className="flex">
            <span className="w-1/3" ><img src={Pic1} className="w-full"/></span>
            <span className="w-1/3"> <img src={Pic2} className="w-full"/> </span>
            <span className="w-1/3"><img src={Pic3} className="w-full"/></span>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </span>

        
    )
}
export default PicBody