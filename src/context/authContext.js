import { createContext, useReducer } from 'react';
import { apiDiagrama } from '../api/apiDiagrama';
import { authReducer } from '../reducer/authReducer';
import { types } from '../type/types';

export const authContext = createContext(null);

const authInitialState = {
    id: null,
    name: null,
    email: null,
    isAuthenticated: false
}

export const AuthContextProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const login = async (email, password) => {

        const res = await apiDiagrama("/user/login", "POST", { email, password });

        if (res.errors || !res.ok) {
            return false;
        }

        const { data } = res;

        dispatch({
            type: types.authLogin,
            payload: { id: data._id, name: data.name, email: data.email }
        });

        return true;
    }

    const logout = () => {
        dispatch({
            type: types.authLogout
        });
    }

    return (
        <authContext.Provider value={{
            auth: authState,
            login,
            logout
        }}>
            {children}
        </authContext.Provider>
    )
}
