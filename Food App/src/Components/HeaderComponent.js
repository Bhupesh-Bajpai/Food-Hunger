import { useState } from "react";
import { LOGO_URL } from "../utills/constants";

import { Link } from "react-router-dom";
const HeaderComponent = () => {
console.log("render")
    return (    
    <div className="headerContainer">
    <div className="logoContainer">
        <img className="logoIcon" src={LOGO_URL} />
    </div>
    <div className="navBarContainer">
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About us</Link>
            </li>
            <li>
            <Link to="/store">Store</Link>
            </li>
            <li>
            <Link to="/contact">Cotact us</Link>
            </li>
            <li>
            <Link>Account</Link>
            </li>
          
        
          
        </ul>
        <ButtonCom></ButtonCom>
       
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