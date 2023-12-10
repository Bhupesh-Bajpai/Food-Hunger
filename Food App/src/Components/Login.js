import { LOGO_URL } from "../utills/constants"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () =>{


  const[username,setUserName] = useState("");
  const[password,setPassword] = useState("");

  const navigate = useNavigate();

    const clickLogin = () =>{
        if(username === "bhupesh@gmail.com" && password=="bb@123"){
          console.log("login...")
          navigate("/body")
        }else{
          console.log("bad credential..")
        }
    }
return(
    <div>

  <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <div class="flex justify-center mb-8">
        <img src={LOGO_URL} alt="Logo" class="w-30 h-20" />
      </div>
      <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Food Hunger</h1>
      <form>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm text-gray-600">UserName</label>
          <input type="email" id="email" name="email" value={username} class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required onChange={(e)=>
          setUserName(e.target.value)}/>
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm text-gray-600">Password</label>
          <input type="password" id="password" name="password" value={password} class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required onChange={(e)=>
            setPassword(e.target.value)
          }/>
          <a href="#" class="block text-right text-xs text-cyan-600 mt-2">Forget Password</a>
        </div>
        <button type="submit" class="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6" onClick={clickLogin}>Login</button>
      </form>
      <div class="text-center">
        <p class="text-sm">Already have an account?  <a href="#" class="text-cyan-600">Register here</a></p>
        <p class="text-sm">Please use bhupesh@gmail.com and bb@123 as credential.  </p>
      </div>
      <p class="text-xs font-semibold text-gray-600 text-center mt-10">&copy; 2023 WCS LAT</p>
    </div>
  </div>

    </div>


)
}

export default Login