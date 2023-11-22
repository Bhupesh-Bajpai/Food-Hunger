import RestraMenuCardCategory from "./RestraMenuCardCategory"
import { useState } from "react"

const RestraurantMenuCard = ({data,showMenuFlag,setShowIndex}) =>{

    // const [toggleMenuFlag,setToggleMenuFlag] = useState(false)

    const clickMenu = ()=>{
        setShowIndex()
    }
    return(
        <div className="flex flex-col w-full h-full bg-gray-200 my-4 shadow-md rounded-md">
            <div className="flex w-full h-full justify-between" onClick={clickMenu}>
            <h2 className="text-lg font-semibold mx-2">{data.title} ({data.itemCards.length})</h2>
            <span className="text-lg font-semibold text-white mx-2">▼</span>
           
            </div>
            <div>
                {showMenuFlag && <RestraMenuCardCategory menu={data.itemCards}/>}
            </div>
            
        </div>
    )
}

export default RestraurantMenuCard