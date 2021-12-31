import axios from "axios";

export const loginCall = async(userCredentials, dispatch) => {
    try {
        dispatch({type: 'LOGIN_START'})
        const res = await axios.post("auth/login", userCredentials)
        dispatch({type: 'LOGIN_SUCCESS', payload: res.data})
    }
    catch (err) {
        dispatch({type: 'LOGIN_FAILURE', payload: err})
    }
}