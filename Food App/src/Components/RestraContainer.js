const RestraContainer = (props) => {
    const { data } = props
    return (
        <div className="restroCard">
            {/* <div className="imgCard">
                <img className="imgLogo" src={data.info.image.url} />
                <div className="text-container">80% OFF</div>
            </div>
            <div className="restroDetails">
                <div className="restroDetailsChild1">
                    <div className="restroName">
                        {data.info.name}
                    </div>
                    <div className="restroItems">
                        {data.info.cuisine.map(cuisine => (
                            <span key={cuisine.name}>{cuisine.name+" "}</span>
                        ))}
                    </div>
                </div>
                <div className="restroDetailsChild2">
                    <div className="restroRating">
                        {data.info.rating.aggregate_rating} ⭐️
                    </div>
                    <div className="restroCost">
                        {data.info.costText.text}
                    </div>
                    <div className="restroEta">
                        {data.order.deliveryTime}
                    </div>

                </div>


            </div> */}

        </div>
    )
};
export default RestraContainer;
