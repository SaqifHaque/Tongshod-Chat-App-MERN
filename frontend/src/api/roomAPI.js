import Axios from 'axios';
import { errorHandler } from '../utils/errorHandler';

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api/rooms`,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
})


export const createRoom = async (data) => {
    try {
        const response = await axios.post(`/create`, data);
        return response.data;
    } catch (error) {
        console.log(error);
       errorHandler(error);
       return error;
    }
}

export const getAllRooms = async (data) => {
    try {
        const response = await axios.get('', data);
        return response.data;
    } catch (error) {
        console.log(error);
       errorHandler(error);
       return error;
    }
}