import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer"

// initial state
const INITIAL_STATE = {
  user: {
    _id: '61c0050348b1fd9f404508d9',
    username: "john",
    email:"john@google.com",
    profilePicture:"",
    coverPicture: "",
    isAdmin: true,
    followers: [],
    followings: []

  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
        {children}
    </AuthContext.Provider>
  );
};
