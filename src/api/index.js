import axios from 'axios' 
let personalApi = axios.create({
    baseURL : 'http://localhost:8000/api/' ,
})
export default personalApi ;