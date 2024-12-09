import axios from "axios";
import { AXIOS_ERRORS } from "utils/constants";
import { axios as configs } from "utils/env"
const api = axios.create({
    baseURL: configs.baseURL,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
})



api.interceptors.response.use(
    response => {
        console.log("interceptor(response) run")
        return response.data
    },
    error => {
        console.log("interceptor(error) run")
        const message = AXIOS_ERRORS[error.response.status] || "Something went wrong"
        return Promise.reject(message)
    }
)

api.interceptors.request.use(
    config => {
        console.log("interceptor(request) run")
        return config
    }
    , error => {
        console.log("interceptor(error) run")
        return Promise.reject(error)
    }
)




export default api