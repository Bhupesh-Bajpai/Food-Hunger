import React from "react";
import ReactDOM from "react-dom/client";

const RestraContainer = () =>{
    return (
        <div className="restroCard">
            <div>
                Nataraj Chole Bhature
            </div>
        </div>
    )
}
const BodyContainer = () =>{
    return (
        <div>
            <div className="searchContainer">
                Search
            </div>
            <div className="restraContainer">
                <RestraContainer/>
            </div>
        </div>
    )
}
const HeaderComponent = () => (
    <div className="headerContainer">
        <div className="logoContainer">
            <img className="logoIcon" src="https://png.pngtree.com/element_our/png/20180930/food-icon-design-vector-png_120564.jpg"/>
        </div>
        <div className="navBarContainer">
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Cart</li>
            <li>Account</li>
        </ul>
        </div>
       
    </div>
)

const AppLayout = () => {
    return(
        <div>
            <HeaderComponent/>
            <BodyContainer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
