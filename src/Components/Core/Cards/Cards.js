import React from "react";
import BoxImg from '../../image/boxImg.svg'
import Star from '../../image/star.svg'
import Chat from '../../image/chat.svg'
import Like from '../../image/like.svg'

const Cards = () => {
    return (
        <div className="flex border-2 border-gray-200 p-5">
            <span className="border-4 rounded-lg z-20">
                <img alt="BoxImg" src={BoxImg} />
            </span>
            <span className="p-6 border-4 ">
            
                <h1 className="text-2xl font-sans">Item 1</h1>

                <p> By <span className="text-2xl">Global X Change</span></p>

                <p className="w-80">Lorem ipsum, or lipsum as it is sometimes known <span className="text-lg">Read More</span> </p>
                
                <img alt="star" src={Star}  className="pt-4"/>

                <div className="flex justify-between p-4">
                    <div className="flex">
                        <div>
                            $ 5.31
                        </div>
                        <div className="pl-6">
                            USD
                        </div>
                    </div>
                    <div className="flex ">
                        <span>
                            <img alt="Like" src={Like} />
                        </span>
                        <span className="pr-6">
                            <img alt="Chat" src={Chat}  className="pl-6"/>
                        </span>
                    </div>
                </div>
            </span>
            
        </div>
    )
}
export default Cards
