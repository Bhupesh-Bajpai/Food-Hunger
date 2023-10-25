
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utills/useRestaurantInfo";



const RestraMenu = () => {
    const { resId } = useParams()
    const resInfo = useRestaurantInfo(resId);
    if (resInfo === null) return (<div></div>)

    const { name, cuisines, costForTwoMessage } = resInfo.cards[0].card.card.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    return (
        <div className="menuRestra">
            <div>{name}</div>
            <div>{cuisines}</div>
            <div>{costForTwoMessage}</div>
            <div className="menucontainer">
                <div><h1>Menu</h1></div>
                <ul>
                    {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price}</li>)}
                    {/* <li>{itemCards[0].card.info.name}</li>
                <li>Coke</li>
                <li>Pasta</li> */}
                </ul>
            </div>
        </div>
    )
}

export default RestraMenu  