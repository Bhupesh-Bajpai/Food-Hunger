import { useState } from "react";

const User = (props) =>{

    const [count] = useState("0")
    const [count1] = useState("1")
    return(
        <div>
            <h1>Function based User component</h1>
            <h2>{props.name}</h2>
            <h2>{props.course}</h2>
            <h2>{props.location}</h2>
            <h3>count: {count}</h3>
            <h3>count: {count1}</h3>
        </div>
    )
}


export default User;