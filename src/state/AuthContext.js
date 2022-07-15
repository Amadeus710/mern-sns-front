import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
// first user state
const initialState = {
    // user: null,
    user: {
        _id: "6279fa3990c310e621212a30",
        username: "testuser1",
        email: "testuser1@gmail.com",
        password: "password",
        profilePicture: "/person/1.jpeg",
        coverPicture: "",
        followers: [],
        followings: [],
        isAdmin: false,
    },
    isFetching: false,
    error: false,
};

// global
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
