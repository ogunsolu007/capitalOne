import axios from "axios"


const newRequest = axios.create({
    baseURL:"https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data",
    withCredentials:false,
})

export default newRequest