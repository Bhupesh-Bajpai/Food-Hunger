import React from "react"
class UserClass extends React.Component{
    constructor (props){
    super(props)
    this.state={
        count : 0,
        count1: 1,
        userInfo: {
            name :"dummy",
            location :"NA"
        }
    }
    // console.log("constructor is called")
    }

    async componentDidMount(){
        // console.log("c.d.m. called")

        const data = await fetch("https://api.github.com/users/Bhupesh-Bajpai");
        const newData = await data.json()
        console.log(newData);
        this.setState({
            userInfo:newData
        })

    }

    render(){

        const {name,location,html_url,avatar_url} = this.state.userInfo
        // console.log("render is called")
        return (
                <div>
                    {/* <h1>Class Component</h1>
                    <h2>{this.props.name}</h2>
                    <h2>{this.props.course}</h2>
                    <h2>{this.props.location}</h2>
                    <h3>count :{this.state.count}</h3>
                    <button onClick={()=>{
                        this.setState({
                            count : this.state.count +1,
                            count1 : this.state.count1 +1
                        }
                          
                        )
                    }}>Increase count</button>
                      <button onClick={()=>{
                        this.setState({
                            count : 0
                        }
                          
                        )
                    }}>Reset count</button>
                    <h3>count :{this.state.count1}</h3> */}

                    <h1>Developer Details</h1>
                    <img src={avatar_url}></img>
                    <h2>Username : {name}</h2>
                    <h2>Location : {location}</h2>
                    <h2>Github Link : {html_url}</h2>
                </div>
        )
    }
}


export default UserClass;