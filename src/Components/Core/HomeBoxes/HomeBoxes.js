import React, { useState, useEffect } from "react";
import MenuAll from '../../image/allmenu.svg'
import Menu from '../../image/menu.svg'
import Cards from "../Cards/Cards";
import { data } from "../../data";
import Vector from '../../image/vector.svg'


const HomeBoxes = () => {
    const [itemData , setItemData] = useState("");
    const [cardData , setCardData] = useState([]);

    // useEffect(() =>{
    //     setCardData(data)
    // },[])

    useEffect(() => {
        const items = data.filter(element => element.name === itemData)
        setCardData(items)
        console.log(items)
        if(items.length === 0){
            setCardData(data)
        }else{
            setCardData(items)
        }


    },[itemData])

    


    function setItemValue(value){
        if(value === "MenuAll"){
          setCardData(data);
         
        }else if(value === "Menu1"){
        setItemData("Item1");
        console.log("Menu1")
      
        }else if(value === "Menu2"){
            setItemData( "Item2");
       
        }else if(value === "Menu3"){
            setItemData("Item3");

        }else if(value === "Menu4"){
            setItemData("Item4");
         
        }
      }
    return (
        <>
            <div className=''>

                <div className="font-sans flex justify-between border-b-2 items-center md:flex-row md:flex-nowrap flex-wrap flex-col ">
                    
                    <div className="text-avermass-black-600 text-xl font-sans cursor-pointer flex justify-around items-center" onClick={()=>setItemValue("MenuAll")}>
                        <div className="mr-2 ml-5"><img alt="Menu1" src={MenuAll} /></div>
                        <div>All</div>

                    </div>
                    <div className="flex cursor-pointer text-avermass-black-600 text-xl font-sans justify-around items-center " onClick={()=>setItemValue("Menu1")}>
                        <div className="mr-2"><img alt="Menu1" src={Menu} /></div>
                        <div>Menu 1</div>

                    </div>

                    <div className="flex cursor-pointer text-avermass-black-600 text-xl font-sans justify-around items-center" onClick={()=>setItemValue("Menu2")}>
                        <div className="mr-2"><img alt="Menu1" src={Menu} /></div>
                        <div>Menu 2</div>

                    </div>
                    <div className="flex cursor-pointer text-avermass-black-600 text-xl font-sans justify-around items-center" onClick={()=>setItemValue("Menu3")}>
                        <span className="mr-2"><img alt="Menu1" src={Menu} /></span>
                        <span>Menu 3</span>


                    </div>
                    <div className="flex cursor-pointer text-avermass-black-600 text-xl font-sans justify-around items-center" onClick={()=>setItemValue("Menu4")}>
                        <div className="mr-2"><img alt="Menu1" src={Menu} /></div>
                        <div>Menu 4</div>

                    </div>
                    <div className="cursor-pointer bg-gray-300">
                        <div className="flex justify-center h-16 w-16 bg-gray-200">
                            <span className="items-center flex justify-center"><img alt="Menu5" src={Vector} /></span>
                        </div>
                    </div>

                </div>
                
                

            </div>

            <section className="p-10">
                <Cards cardData = {cardData} />
            </section>
        </>

    )
}
export default HomeBoxes