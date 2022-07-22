import React ,{useState} from "react";

import Navbar from "../Core/Navbar/Navbar";
import PicBody from "../Core/PicBody/PicBody";
import HomeBoxes from "../Core/HomeBoxes/HomeBoxes";
import Cookies from "../Core/Cookies/Cookies";
import Modal from "../Core/Mod/Modal";




const Home = () => {
    const [footer, setFooter] = useState(true);

    const [modal , setModal] = useState(false)
    return(
        <div className="gray-100">
            <Navbar modal={modal} setModal={setModal} />
            <PicBody />
            <HomeBoxes />

            {modal && <Modal setModal = {setModal} />}

            {footer && <Cookies  setFooter = {setFooter}  /> }
        </div>
    )
}
export default Home