import RestraSwiggyContainer from "./RestraSwiggyContainer";
import RestraContainer from "./RestraContainer";
import {useState,useEffect} from "react"
import { ColorRing} from  'react-loader-spinner'
const BodyContainer = () => {

    const [listRestaurant ,setListRestaurant] = useState([])
    const [listSearchRestaurant ,setListSearchRestaurant] = useState([])

    const [searchValue , setSearchValue] = useState("");

    const filterRestra = () =>{

        const filterList = listRestaurant.filter((res)=>{
        return res.info.rating.aggregate_rating > 4
        })
        setListRestaurant(filterList)
    }

    const searchRestraHandler = () =>{
      const searchRestaurant = listRestaurant.filter((res)=>{
        return res.info.name.includes(searchValue)
      });
      setListSearchRestaurant(searchRestaurant)
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
        setListSearchRestaurant(json[0]['sections']['SECTION_SEARCH_RESULT'])
    }
    const customWrapperStyle = {
        // Add your custom CSS styles here
        display: "flex", // Use flexbox
        justifyContent: "center", // Center horizontally
        alignItems: "center", 
        width:"100%",
        height:"100%"
      };

      return (
        <div>
          <div className="restraContainer">
            <div className="restraCont1">
            <div className="search-box">
                <input className="serach-input" type="text" value={searchValue} onChange={(e)=>{
                  setSearchValue(e.target.value)
                }}/>
                <button className="search-btn" onClick={searchRestraHandler}>Search</button>
              </div>
              <button className="filter-btn" onClick={filterRestra}>
                Best Restaurants
              </button>
             
            </div>
            <div className="restraContainerCard">
              {listRestaurant.length === 0 ? (
                // Render a specified number of RestraContainer components
                <>
                  {Array.from({ length: 12 }, (_, index) => (
                    <RestraContainer key={index} />
                  ))}
                </>
              ) : (
                // Render the list of restaurants
                <>
                  {listSearchRestaurant.map((restaurant) => (
                    <RestraSwiggyContainer
                      key={restaurant.info.resId}
                      data={restaurant}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      );
      
};
export default BodyContainer;