import React from "react";
import BoxImg from '../../image/boxImg.svg'
import Star from '../../image/star.svg'
import Chat from '../../image/chat.svg'
import Like from '../../image/like.svg'
import { data } from "../../data1";

const Cards = () => {
    return (
        <div>
            {
                data.map((el) => {
                    return (
                        <div className="flex ">
                            <div className="w-188px h-296px border border-gray-200 rounded-3xl flex justify-center items-center ">
                                <img alt="BoxImg" src={BoxImg} />
                            </div>
                            <div className="border border-gray-200 rounded-r-3xl h-44 mt-8 ">
                                <p className="text-2xl">{el.name}</p>
                                <p> By <span>{el.company}</span></p>
                                <p className="w-80">Lorem ipsum, or lipsum as it is sometimes known <span>Read More</span> </p>
                                <img alt="star" src={Star} />
                                <div className="flex justify-between">
                                    <div className="flex">
                                        <div>
                                            $ {el.price}
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
                                            <img alt="Chat" src={Chat} className="pl-6" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Cards
