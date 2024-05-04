import React, { useState } from 'react'
import "./Register.scss"
import bg from "../../assets/bg.png"
import { Link, useNavigate } from 'react-router-dom'
import apiRequest from '../../lib/apiRequest.js'
import axios from "axios"
import banner4 from "../../assets/banner4.png"

const Register =  () => {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


    const handleSubmit =async e=>{
        e.preventDefault()
        setIsLoading(true)
        setError("")
        const formData = new FormData(e.target)

        const username = formData.get("username")       
        const email = formData.get("email")
        const password = formData.get("password")

        try{
            const res = await axios.post("http://localhost:6900/api/auth/register", {
                username, email, password
            }, {withCredentials:true})
            console.log(res.data)
            navigate("/login")
        }catch(err){
            console.log(err.response.data.message);
            setError(err.response.data.message)
        }finally{
          setIsLoading(false)
        }


    }
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1 className=' self-center text-[24px]'>Create an Account</h1>
          <input required name="username" type="text" placeholder="Username" />
          <input required name="email" type="text" placeholder="Email" />
          <input required name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Already have an account?</Link>
        </form>
      </div>
      <div className="imgContainer bg-black">
        <img src={banner4} alt="" />
      </div>
    </div>
  )
}

export default Register