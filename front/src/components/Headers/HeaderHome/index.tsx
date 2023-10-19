import { StyledButtonCSS } from "../../../styles/button.ts"
import { StyledHeader, StyledTextDegrade, StyledButtonRegisterAndLogin  } from "./style.ts"


export const HeaderHome=()=>{
    return (
       <StyledHeader>
        <StyledTextDegrade>Motors <small className='shop'>shop</small></StyledTextDegrade>
        <StyledButtonRegisterAndLogin>
            <StyledButtonCSS className='buttonLogin' $buttonSize='big' $buttonStyle='buttonOutline2'>Fazer Login</StyledButtonCSS>
            <StyledButtonCSS $buttonSize='big' $buttonStyle='buttonOutline2'>Cadastrar</StyledButtonCSS>
        </StyledButtonRegisterAndLogin>
       </StyledHeader>
    )
}