import UserClass from "./UserClass"
import User from "./User"
import { useContext } from "react"
import UserContext from "../utills/UserContext"

const About = () =>{

     const {loggedinUser}=useContext(UserContext)
    return(
        <div>
            <h1>Welcome Food Hunger</h1>
            <UserClass name={"bhupesh"} course={"React"} location={"India"}></UserClass>
            <h3>{loggedinUser}</h3>
            {/* <UserClass name={"bhupesh"} course={"React"} location={"India"}></UserClass> */}
            {/* <User name={"bhupesh"} course={"React"} location={"India"}></User> */}
        </div>
    )
}

export default About