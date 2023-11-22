
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utills/useRestaurantInfo";
import RestraurantMenuCard from "./RestraurantMenuCard";
import { useState } from "react";



const RestraMenu = () => {
    const { resId } = useParams()
    const resInfo = useRestaurantInfo(resId);
    // const [showMenu,setShowMenu] = useState(false)
    const [showIndex,setShowIndex] = useState(0);
    if (resInfo === null) return (<div></div>)

    const { name, cuisines, costForTwoMessage } = resInfo.cards[0].card.card.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

    const  filterRestra = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=> c.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    const toggleMenu = (index) => {
        if (index === showIndex) {
          // If the clicked card is already open, close it
          setShowIndex(-1);
        } else {
          // If the clicked card is closed, open it and close the previously open menu (if any)
          setShowIndex(index);
        }
      };


    
    // const [activeIndex, setActiveIndex] = useState(0);
    // console.log(filterRestra)

    return (
        <div className="w-8/12 h-full m-auto ">
            <div className="flex flex-col w-full mx-2 my-2 h-3/12">
                
                <div className="my-1 font-semibold text-2xl">{name}</div>
                <div className="font-medium text-sm">{cuisines.join(" ")}</div>
               <div className="font-medium text-sm">{costForTwoMessage}</div>
              
              
            </div>

            <div className="flex flex-col w-full mx-2 my-2 h-9/12">
            {filterRestra.map((category,index)=>(
            <RestraurantMenuCard key={category.card.card.title} data={category.card.card} showMenuFlag={index === showIndex ? true : false}
            setShowIndex={()=>toggleMenu(index)}  />
           ))}
            </div>
        </div>
    )
}

export default RestraMenu  