import axios from "axios";


const apiRequest = axios.create({
    baseURL:"http://localhost:6900/api",
    withCredentials: true
})


export default apiRequest