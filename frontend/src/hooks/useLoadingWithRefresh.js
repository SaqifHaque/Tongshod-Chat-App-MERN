import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { SET_AUTH } from "../redux/features/auth/authSlice";

export const useLoadingWithRefresh = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/refresh`,
                {
                    withCredentials:true
                });
                
                dispatch(SET_AUTH(data));
                setLoading(false)
            } catch(error) {
                console.log(error);
                setLoading(false);
            }
            
        })();
    }, [])

    return { loading };
}