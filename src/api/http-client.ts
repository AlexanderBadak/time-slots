import axios, { AxiosInstance } from 'axios'

let instance: AxiosInstance | undefined

const HttpClient = (url: string) : AxiosInstance => {
    if (!instance) {
        instance = axios.create({
            baseURL: url,
            timeout: 15000,
        })
    }

    return instance
}

export default HttpClient