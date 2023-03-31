import { AxiosRequestConfig } from 'axios';

export const AxiosUpdateHeader = (req: AxiosRequestConfig) => {
    const token = "";
    const header = {
        Authorization: token,
        "Content-Type": "application/json"
    }
    return header
}