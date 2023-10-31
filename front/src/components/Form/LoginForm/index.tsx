import  Input  from "../Input";
import { useForm } from "react-hook-form"
import {LoginData, schema} from "./validator"
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../../hooks/useAuth";
import { StyledTitle } from "../../../styles/typography";
import { StyledContainerForm } from "./style";
import { StyledButtonCSS } from "../../../styles/button";

const LoginForm=()=>{
    const {signIn} = useAuth()
    const {register, handleSubmit}=useForm<LoginData>({
        resolver: zodResolver(schema)
    })

    const redirectCadastro=()=>{
        setTimeout(function() {
            window.location.href = "/cadastro";
        });
    }

    return (
        <StyledContainerForm>
        <form onSubmit={handleSubmit(signIn)}>
            <StyledTitle $fontSize="one" $fontColor="black">Login</StyledTitle>
            <Input id="email" label="email" placeholder="Digitar email" {...register("email")}/>
            <Input id="password" label="senha" placeholder="Digitar senha" {...register("password")}/>
            <StyledTitle className="StyleesqueciMinhaSenha" $fontSize="three" $fontColor="gray600">Esqueci minha senha</StyledTitle>
            <StyledButtonCSS $buttonSize="big" $buttonStyle="buttonBigBlue" type="submit">Entrar</StyledButtonCSS>
            <StyledTitle  $fontSize="three" $fontColor="gray600">ainda não possui cadastro?</StyledTitle>
            <StyledButtonCSS onClick={redirectCadastro} $buttonSize="big" $buttonStyle="buttonOutline2">cadastrar</StyledButtonCSS>
        </form>
        </StyledContainerForm>
    )
}
export default LoginForm