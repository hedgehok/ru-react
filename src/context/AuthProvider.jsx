import { createContext, use, useState } from "react";

const AuthContext = createContext(null);

export function useAuth() {
    return use(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => localStorage.getItem('user') || null);

    const signin = (newUser, callback) => {
        setUser(newUser);
        localStorage.setItem('user', newUser);
        callback();
    }

    const signout = (callback) => {
        setUser(null);
        localStorage.removeItem('user');
        callback();
    }

    const value = {
        user,
        signin,
        signout
    }

    return (
        <AuthContext value={value}>
            { children }
        </AuthContext>
    );
}