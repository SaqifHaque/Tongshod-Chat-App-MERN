import { useCallback, useEffect, useRef, useState } from "react";


export const useStateWithCallback = (initialState) => {
    const [state, setState] = useState(initialState);
    const cbRef = useRef();

    const updateState = useCallback((newState, callback) => {
        cbRef.current = callback;

        setState((prev) => {
            return typeof newState === 'function' ? newState(prev) : newState
        }, [state])
    })

    useEffect(() => {
        cbRef.current(state); 
        cbRef.current = null;
    }, [state])

    return  [state, updateState];

}