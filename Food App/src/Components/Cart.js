import { useSelector } from "react-redux";
import RestraMenuCardCategory from "./RestraMenuCardCategory";

const Cart = () =>{

    const cartItems = useSelector((store)=> store.cart.items)
return (
    <div className="w-6/12 h-full m-auto border-b-2 text-center bg-gray-200">
       <h1>Cart</h1>
       <RestraMenuCardCategory menu={cartItems}/>
    </div>
)
}

export default Cart;