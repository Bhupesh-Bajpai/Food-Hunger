import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent";
import BodyContainer from "./Components/BodyContainer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestraMenu from "./Components/RestraMenu";
import Offline from "./Components/Offline";
import useOnlineStatus from "./utills/useOnlineStatus";
// import Store from "./Components/Store";



const LazyStore = lazy(()=> import("./Components/Store"))

const AppLayout = () => {
    const onlineStatus = useOnlineStatus();


   

if(onlineStatus === false) return (
  <Offline></Offline>
)
    return (
        <div>
            <HeaderComponent />
            <Outlet/>
            
        </div>
    )
}


const appRouter = createBrowserRouter(
    [
        {
            path:'/',
            element:<AppLayout/>,
            children:[
                {
                    path:'/',
                    element:<BodyContainer />
                },
                {
                    path:'/about',
                    element:<About />
                },{
                    path:'/contact',
                    element:<Contact />
                },{
                    path:'/restramenu/:resId',
                    element: <RestraMenu />
                },{
                    path:'/store',
                    element: <Suspense fallback={<h1>loading...</h1>}>
                            <LazyStore />   
                            </Suspense>
                    
                    
                }
            ],
            errorElement:<Error/>
        },
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
