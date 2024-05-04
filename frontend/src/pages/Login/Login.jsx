import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./Login.scss"
import {Link} from "react-router-dom"
import apiRequest from '../../lib/apiRequest.js'
import banner6 from "../../assets/banner10.png"
import { authContext } from '../../context/authContext.jsx'
const Login = () => {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const {updateUser} = useContext(authContext)


    const handleSubmit =async e=>{
        e.preventDefault()
        setIsLoading(true)
        setError("")
        const formData = new FormData(e.target)

        const username = formData.get("username")       
        const password = formData.get("password")

        try{
            const res = await axios.post("http://localhost:6900/api/auth/login", {
                username,password
            }, {withCredentials:true})
            updateUser(res.data)
            navigate("/")
        }catch(err){
            console.log(err.response.data.message);
            setError(err.response.data.message)
        }finally{
          setIsLoading(false)
        }


    }
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1 className=' self-center text-[24px]'>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src={banner6} alt="" />
      </div>
    </div>
  )
}

export default Login