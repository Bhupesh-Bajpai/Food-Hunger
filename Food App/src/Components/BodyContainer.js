import RestraSwiggyContainer from "./RestraSwiggyContainer";
import {useState,useEffect} from "react"
import { ColorRing} from  'react-loader-spinner'
const BodyContainer = () => {

    const [listRestaurant ,setListRestaurant] = useState([])

    const filterRestra = () =>{

        const filterList = listRestaurant.filter((res)=>{
        return res.info.rating.aggregate_rating > 4
        })
        setListRestaurant(filterList)
    }
   

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch("http://localhost:3000/restrData",{
            method: "GET"
        })

        //  optional chanining
        const json = await data.json()
        setListRestaurant(json[0]['sections']['SECTION_SEARCH_RESULT'])
    }
    const customWrapperStyle = {
        // Add your custom CSS styles here
        display: "flex", // Use flexbox
        justifyContent: "center", // Center horizontally
        alignItems: "center", 
        width:"100%",
        height:"100%"
      };

    if(listRestaurant.length===0){
        return <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{customWrapperStyle}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    }
    return (
        <div>

            <div className="restraContainer">
                <div>
                    <button className="filter-btn" onClick={filterRestra}>Filter Restra</button>
                </div>
                <div className="restraContainerCard">
                {listRestaurant.map((restaurant) =>
                    <RestraSwiggyContainer key=
                    {restaurant.info.resId} data={restaurant} />
                )}
                </div>
               
            </div>
        </div>
    )
};
export default BodyContainer;