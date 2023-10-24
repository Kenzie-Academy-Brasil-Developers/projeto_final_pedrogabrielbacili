import { StyledButtonCSS } from "../../../styles/button.ts"
import { StyledHeader, StyledTextDegrade, StyledButtonRegisterAndLogin  } from "./style.ts"
import { StyledMenuHambuguer } from "./style"
import {AiOutlineMenu } from "react-icons/ai"


const redirectCadastro=()=>{
    setTimeout(function() {
        window.location.href = "/cadastro";
    });
}

const redirectLogin=()=>{
    setTimeout(function() {
        window.location.href = "/";
    });
}

export const HeaderHome=()=>{
    return (
       <StyledHeader>
        <StyledTextDegrade>Motors <small className='shop'>shop</small></StyledTextDegrade>
        <StyledButtonRegisterAndLogin>
            <StyledButtonCSS onClick={redirectLogin} className='buttonLogin' $buttonSize='big' $buttonStyle='buttonBlue1'>Fazer Login</StyledButtonCSS>
            <StyledButtonCSS onClick={redirectCadastro} $buttonSize='big' $buttonStyle='buttonOutline2'>Cadastrar</StyledButtonCSS>
        </StyledButtonRegisterAndLogin>
        <StyledMenuHambuguer >
            <AiOutlineMenu/>
        </StyledMenuHambuguer>
       </StyledHeader>
    )
}