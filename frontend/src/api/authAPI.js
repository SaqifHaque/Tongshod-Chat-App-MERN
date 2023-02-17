import Axios from 'axios';
import { errorHandler } from '../utils/errorHandler';

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api/auth`,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
})


export const sendOtp = async (data) => {
    try {
        const response = await axios.post(`/send-otp`, data);
        return response.data;
    } catch (error) {
       errorHandler(error);
    }
}

export const verifyOtp = async (data) => {
    try {
        const response = await axios.post(`/verify-otp`, data);
        return response.data;
    } catch (error) {
        console.log(error);
       errorHandler(error);
    }
}

export const activate = async (data) => {
    try {
        const response = await axios.post(`/activate`, data);
        return response.data;
    } catch (error) {
        console.log(error);
       errorHandler(error);
    }
}