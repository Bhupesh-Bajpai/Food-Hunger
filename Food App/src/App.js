import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent";
import BodyContainer from "./Components/BodyContainer";




const AppLayout = () => {
    return (
        <div>
            <HeaderComponent />
            <BodyContainer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
