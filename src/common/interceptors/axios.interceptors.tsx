import axios from "axios"
import { getValidationError } from "../utilities/get-validation-error"

export const AxiosInterceptor = () => {
    // if use authorization 
    // import AxiosUpdateHeader
    // AxiosUpdateHeader(req)
    
    axios.interceptors.request.use((req) => {
        return req
    })

    axios.interceptors.response.use(
        (resp) => resp,
        (error) => {
            // get error message
            const errorMsg = getValidationError(error.code);
            console.log({errorMsg})
            // kill response
            Promise.reject(error)
        }
    )
}