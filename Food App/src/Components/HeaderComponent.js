import { useState } from "react";
import { LOGO_URL } from "../utills/constants";
const HeaderComponent = () => {
console.log("render")
    return (    
    <div className="headerContainer">
    <div className="logoContainer">
        <img className="logoIcon" src={LOGO_URL} />
    </div>
    <div className="navBarContainer">
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Cart</li>
            <li>Account</li>
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