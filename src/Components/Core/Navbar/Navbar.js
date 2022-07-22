import React, {useState} from "react";
import Logo1 from "../../image/logo1.svg";
import Logo2 from "../../image/logo2.svg";
import Logo3 from "../../image/logo3.svg";

const Navbar = ({setModal , modal}) => {

    return(
        <div className="flex justify-between h-16 items-center mr-20 ml-20">
            <div className="h-16">
                <img src={Logo1} className="w-20 h-16" alt="logo-img" />
            </div>
            <div >
                <img src={Logo2} className="w-28 h-20" alt="logo-img" />
            </div>
            <div  onClick={() => { setModal(!modal) }}>
                <img src={Logo3} className="w-20 h-16" alt="logo-img"/>
            </div>
        </div>
    )
}
export default Navbar