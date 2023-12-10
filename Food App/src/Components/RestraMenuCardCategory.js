import { useDispatch } from "react-redux";
import { addItem } from "../utills/Redux/cartSlice";
import { IMG_CDN_URL } from "../utills/constants";
const RestraMenuCardCategory  = ({menu}) =>{

    const dispatch = useDispatch()

    const handleAddItem = (item) =>{
        dispatch(addItem(item))
    }
    console.log(menu)
    return(
        <div>
            {menu.map((c)=>(
                <div key={c.card.info.id} className="flex flex-row justify-between w-full h-full my-6 mx-4">
                    <div className="flex flex-col w-9/12 h-full">
                    <div className="text-lg font-bold mx-2 my-1">{c.card.info.name}</div>
                    <div className="text-md font-semibold mx-2 my-1">₹{c.card.info.price ? c.card.info.price/100 : c.card.info.defaultPrice/100}</div>
                    <div className="text-sm font-light mx-2 my-1">{c.card.info.description}</div>
                    </div>
                    <div className="flex w-3/12 h-full items-center justify-center ">
                    <img className="w-8/12 h-6/12 relative" src={IMG_CDN_URL+c.card.info.imageId} />
                      <div className="absolute w-20 h-8 mt-24 bg-white rounded flex justify-center items-center">
                        <button className="text-green-500 " onClick={()=>handleAddItem(c)}>
                            Add
                        </button>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default RestraMenuCardCategory