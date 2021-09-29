import axios from 'axios';
import { BASE_URL,  TIMEOUT } from './config'
console.log('axios')
const service = axios.create({
    baseURL: BASE_URL,
    TIMEOUT
})

service.interceptors.response.use(
    response => {
        const { data } = response
        return data
    }
)
export default service