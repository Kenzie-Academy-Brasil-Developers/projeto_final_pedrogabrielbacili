import { StyledButtonCSS } from "../../styles/button"
import { StyledTitle } from "../../styles/typography"
import { StyledFooter } from "./style"
import { FaAngleUp } from "react-icons/fa6"

export const Footer = ()=>{
    return (
        <StyledFooter>
            <StyledTitle $fontSize='one' fontColor="white" className="motorsFooter">Motors <small className="shop">shop</small></StyledTitle>
            <StyledTitle $fontSize='three' fontColor="white" className="copyright">© 2022 -  Todos os direitos reservados.</StyledTitle>
            <StyledButtonCSS className="buttonIcon" $buttonSize="medium" $buttonStyle="buttonBig45"><FaAngleUp/></StyledButtonCSS>
        </StyledFooter>
    )
}