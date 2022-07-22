import React  from "react";
import BoxImg from '../../image/boxImg.svg'
import Star from '../../image/star.svg'
import Chat from '../../image/chat.svg'
import Like from '../../image/like.svg'
// import { data } from "../../data";

const Cards = ({cardData}) => {
    console.log(cardData)
    // const [cardData , setCardData] = useState([]);
    // useEffect(() => {
    //     const items = data.filter(element => element.name === itemData)
    //     setCardData(items)

    // },[])

    // console.log(data , cardData ,itemData)

    return (
        <div className=" flex grid grid-cols-2 gap-10 w-full md:flex-row md:flex-nowrap flex-wrap flex-col ">
            {
                cardData.map((el) => {
                    return (
                        <div className="flex md:flex-row md:flex-nowrap flex-wrap flex-col   ">
                            <div className="w-188px h-296px border border-gray-200 rounded-3xl flex justify-center items-center ">
                                <img alt="BoxImg" src={BoxImg} />
                            </div>
                            <div className="border border-gray-200 rounded-r-3xl h-44 mt-8 p-4">
                                <p className="text-2xl font-bold">{el.name}</p>
                                <p> By <span className="font-semibold">{el.company}</span></p>
                                <p className="w-80">Lorem ipsum, or lipsum as it is sometimes known <span className="font-bold text-gray-500">Read More</span> </p>
                                <img alt="star" src={Star} />
                                <div className="flex justify-between">
                                    <div className="flex">
                                        <div className="font-bold text-xl">
                                            $ {el.price}
                                        </div>
                                        <div className="p-2 font-light">
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
