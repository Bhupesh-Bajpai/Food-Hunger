import { useContext, useState } from "react";
import { LOGO_URL } from "../utills/constants";

import { Link } from "react-router-dom";
import UserContext from "../utills/UserContext";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
const HeaderComponent = () => {

    const {loggedinUser}= useContext(UserContext)

// suscribing the store to read the data
    const cartSlice =  useSelector((store)=> store.cart.items)
    const navigate  = useNavigate();
// console.log("render")
    return (    
    <div className="flex flex-row w-full h-full justify-between bg-white py-2 text-neutral-600">
    <div className="w-7/12 h-full flex items-center mx-4">
        <img className="w-2/12" src={LOGO_URL} />
    </div>
    <div className="w-5/12 h-full my-12">
        <ul className="flex flex-row w-full h-full items-center">
            <li className="mx-2">
            <Link to="/body">Home</Link>
            </li>
            <li className="mx-2">
            <Link to="/about">About us</Link>
            </li>
            <li className="mx-2">
            <Link to="/store">Store</Link>
            </li>
            <li className="mx-2 font-semibold">
            <Link to="/cart">Cart - ({cartSlice.length})</Link>
            </li>
            <li className="mx-2">
            <Link to="/contact">Cotact us</Link>
            </li>
            {/* <li className="mx-2">
            <Link>Account</Link>
            </li> */}
           
            <li className="mx-2">
                {loggedinUser}
            </li>

            <li className="mx-2">
            <ButtonCom></ButtonCom>
            </li>
        
          
        </ul>
       
       
    </div>

</div>
)

}


export const ButtonCom = () =>{

    const navigate = useNavigate();

    const[loginValue,setLoginvalue] = useState("Logout")

    const clickLoginHandler = () =>{
        if(loginValue === "Logout"){
            setLoginvalue("Logout")
            navigate("/login");
        }else{
            setLoginvalue("Login")
        }
      
        console.log(loginValue);
    }
        return (
            <div className="btnComp">
                <button onClick={clickLoginHandler}>{loginValue}</button>
            </div>
        )
}

export default HeaderComponent;