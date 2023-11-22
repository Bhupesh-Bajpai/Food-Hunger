import { IMG_CDN_URL } from "../utills/constants";
const RestraSwiggyContainer = (props) => {
    const { data } = props
    return (
        <div className="restroCard">
            <div className="imgCard">
                <img className="imgLogo" src={IMG_CDN_URL+data.info.cloudinaryImageId} />
                {data.info.aggregatedDiscountInfoV3
 && data.info.aggregatedDiscountInfoV3.length > 0 && (
  <div className="text-container">{data.info.aggregatedDiscountInfoV3[0]}</div>
)}
            </div>
            <div className="restroDetails">
                <div className="restroDetailsChild1">
                    <div className="restroName">
                        {data.info.name}
                    </div>
                    <div className="restroItems">
                        {data.info.cuisines.map(cuisine => (
                        cuisine + " "
                        ))}
                    </div>
                </div>
                <div className="restroDetailsChild2">
                    <div className="restroRating">
                        {data.info.avgRating} ⭐️
                    </div>
                    <div className="restroCost">
                        {data.info.costForTwo}
                    </div>
                    <div className="restroEta">
                        {data.info.sla.slaString}
                    </div>

                </div>


            </div>

        </div>
    )
};


export const PromotedRestraCrad = (RestraSwiggyContainer) =>{
    return (props) =>{
        return (
            <div>
                <label>Promoted</label>
                <RestraSwiggyContainer {...props}/>
            </div>
        )
    }
}
export default RestraSwiggyContainer;
