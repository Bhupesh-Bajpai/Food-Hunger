import RestraSwiggyContainer,{PromotedRestraCrad} from "./RestraSwiggyContainer";
import RestraContainer from "./RestraContainer";
import {useState,useEffect,useContext} from "react"
import { Link } from "react-router-dom";
import UserContext from "../utills/UserContext";


const BodyContainer = () => {

    const [listRestaurant ,setListRestaurant] = useState([])
    const [listFilterRestaurant ,setListFilterRestaurant] = useState([])

    const [searchValue , setSearchValue] = useState("");


    const PromotedRestraContainer = PromotedRestraCrad(RestraSwiggyContainer);

    const {loggedinUser,setUserName} = useContext(UserContext)
   
    

    const filterRestra = () =>{

        const filterList = listRestaurant.filter((res)=>{
        return res.info.avgRating > 4
        })
        setListFilterRestaurant(filterList)
    }

    const searchRestraHandler = () =>{
      const searchRestaurant = listRestaurant.filter((res)=>{
        return res.info.name.includes(searchValue)
      });
      setListFilterRestaurant(searchRestaurant)
    }
   

    useEffect(()=>{
        fetchData();
    },[])


    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        //  optional chanining
        const json = await data.json()
        console.log(json)
        setListRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
        setListFilterRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
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
                  setSearchValue(e.target.value);
                }}/>
                <button className="search-btn" onClick={searchRestraHandler}>Search</button>
              </div>
              <div>
                <label> UserName</label>
                <input className=" m-2 border border-black-2" value={loggedinUser} onChange={(e)=>{
                    setUserName(e.target.value)
                }}></input>
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
                  {listFilterRestaurant.map((restaurant) => (
                    <Link  key={restaurant.info.id} to={"/restramenu/"+restaurant.info.id}>

                    {restaurant.info.isOpen ? <PromotedRestraContainer data={restaurant}/> :  <RestraSwiggyContainer data={restaurant}/>}
                   
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      );
      
};
export default BodyContainer;