import { useContext, useState } from "react";
import { LOGO_URL } from "../utills/constants";

import { Link } from "react-router-dom";
import UserContext from "../utills/UserContext";

import { useSelector } from 'react-redux'
const HeaderComponent = () => {

    const {loggedinUser}= useContext(UserContext)
    const cartSlice =  useSelector((store)=> store.cart.items)
// console.log("render")
    return (    
    <div className="flex flex-row w-full h-full justify-between">
    <div className="w-6/12 h-full flex items-center mx-4">
        <img className="w-2/12" src={LOGO_URL} />
    </div>
    <div className="w-6/12 h-full">
        <ul className="flex flex-row w-full h-full items-center">
            <li className="mx-2">
            <Link to="/">Home</Link>
            </li>
            <li className="mx-2">
            <Link to="/about">About us</Link>
            </li>
            <li className="mx-2">
            <Link to="/store">Store</Link>
            </li>
            <li className="mx-2 font-semibold">
            <Link to="/store">Cart - ({cartSlice.length})</Link>
            </li>
            <li className="mx-2">
            <Link to="/contact">Cotact us</Link>
            </li>
            <li className="mx-2">
            <Link>Account</Link>
            </li>
            <li className="mx-2">
            <ButtonCom></ButtonCom>
            </li>
            <li className="mx-2">
                {loggedinUser}
            </li>
        
          
        </ul>
       
       
    </div>

</div>
)

}


export const ButtonCom = () =>{

    const[loginValue,setLoginvalue] = useState("Login")

    const clickLoginHandler = () =>{
        if(loginValue === "Login"){
            setLoginvalue("Logout")
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