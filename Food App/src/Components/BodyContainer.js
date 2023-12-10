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
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-3/12 flex flex-row m-3 align-middle">
            <div className="w-9/12 h-full flex flex-row">
                <input className="w-10/12 border border-black-800" type="text" value={searchValue} onChange={(e)=>{
                  setSearchValue(e.target.value);
                }}/>
                <button className="font-medium mx-5" onClick={searchRestraHandler}>Search</button>
              </div>
              {/* <div>
                <label> UserName</label>
                <input className=" m-2 border border-black-2" value={loggedinUser} onChange={(e)=>{
                    setUserName(e.target.value)
                }}></input>
              </div> */}
              <button className="w-3/12 h-full flex align-middle justify-center" onClick={filterRestra}>
                <div className="w-5/12 h-full border border-black-800 bg-gray-950 text-white rounded-xl">
                Best Restaurants
                </div>
               
              </button>
             
            </div>
            <div className="w-full h-full">
              {listRestaurant.length === 0 ? (
                // Render a specified number of RestraContainer components
                <>
                  {Array.from({ length: 12 }, (_, index) => (
                    <RestraContainer key={index} />
                  ))}
                </>
              ) : (
                // Render the list of restaurants
                <div className="w-full h-full flex flex-row flex-wrap m-3">
                  {listFilterRestaurant.map((restaurant) => (
                    <Link  key={restaurant.info.id} to={"/restramenu/"+restaurant.info.id}>

                    {/* {restaurant.info.isOpen ? <PromotedRestraContainer data={restaurant}/> :  <RestraSwiggyContainer data={restaurant}/>} */}

                    <RestraSwiggyContainer data={restaurant}/>
                   
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      );
      
};
export default BodyContainer;