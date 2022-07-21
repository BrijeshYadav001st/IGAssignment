import React from "react";
import Logo1 from "../../image/logo1.svg";
import Logo2 from "../../image/logo2.svg";
import Logo3 from "../../image/logo3.svg";

const Navbar = () => {
    return(
        <div className="flex justify-between h-20 items-center">
            <div >
                <img src={Logo1} className="pl-16" />
            </div>
            <div>
                <img src={Logo2} />
            </div>
            <div>
                <img src={Logo3}  className="pr-16"/>
            </div>
        </div>
    )
}
export default Navbar