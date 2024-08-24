import * as Axios from 'axios'
import axios from 'axios';

const _headers: any = {
    "Content-Type": "application/json",
}

const _confing: Axios.AxiosRequestConfig = {
    headers: _headers
}

export const changeConfigHeader = (key: any, value: string) => {
    _headers[key] = value;
};

export const apiCall = (baseUrl: string) => {
    _confing.baseURL = baseUrl
    return axios.create(_confing)
}

export const request = (axios: Axios.AxiosInstance, method: Axios.Method, url: string, data?: {}) =>
    axios.request({
        url: url,
        method: method,
        data: data
    })