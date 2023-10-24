import { Footer } from "../../components/Footer"
import { RegisterForm } from "../../components/Form/RegisterForm"
import { HeaderHome } from "../../components/Headers/HeaderHome"

export const RegisterPage=()=>{
    return (
        <div>
            <HeaderHome/>
            <RegisterForm/>
            <Footer/>
        </div>
    )
}