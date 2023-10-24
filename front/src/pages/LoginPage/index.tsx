import { Footer } from "../../components/Footer";
import LoginForm from "../../components/Form/LoginForm";
import { HeaderHome } from "../../components/Headers/HeaderHome";

export const LoginPage = ()=>{
    return(
        <div>
            <HeaderHome/>
            <LoginForm/>
            <Footer/>
        </div>
    )
}