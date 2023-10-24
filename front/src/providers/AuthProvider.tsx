import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../components/Form/LoginForm/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";


interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextValues {
    signIn: (data: LoginData) => void
    loading: boolean
}

export const AuthContext = createContext<AuthContextValues>({} as AuthContextValues)

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem("your-todolist:token")
        console.log("aqui")
        if (!token) {
            setLoading(false)
            return
        }

        api.defaults.headers.common.Authorization = `Bearer ${token}`
        setLoading(false)

    }, [])


    const signIn = async (data: LoginData) => {

        try {

            const response = await api.post("/login", data)

            const { token } = response.data

            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("project_final:token", token)

            navigate("dashboard")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, loading }}>
            {children}
        </AuthContext.Provider>
    )
}