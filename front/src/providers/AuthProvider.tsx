import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../components/Form/LoginForm/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../components/Form/RegisterForm/validator";


interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextValues {
    signIn: (data: LoginData) => void
    loading: boolean
    registerUser:(data:RegisterData)=> void
}

export const AuthContext = createContext<AuthContextValues>({} as AuthContextValues)

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem("your-todolist:token")
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
            const teste = localStorage.setItem("@TOKEN", token)

            navigate("home")
        } catch (err) {
            console.log(err)
        }
    }

    const registerUser = async(data:RegisterData)=>{
        console.log(data)
        try{
            await api.post("/users/address", data)
            

        }catch (err){
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, loading, registerUser }}>
            {children}
        </AuthContext.Provider>
    )
}