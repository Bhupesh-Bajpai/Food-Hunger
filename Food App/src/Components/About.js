import UserClass from "./UserClass"
import User from "./User"

const About = () =>{
    return(
        <div>
            <h1>Welcome Food Hunger</h1>
            <UserClass name={"bhupesh"} course={"React"} location={"India"}></UserClass>
            {/* <UserClass name={"bhupesh"} course={"React"} location={"India"}></UserClass> */}
            {/* <User name={"bhupesh"} course={"React"} location={"India"}></User> */}
        </div>
    )
}

export default About