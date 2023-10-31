import { StyledTitle } from "../../../styles/typography"
import { StyleCartComentarios } from "./style"

export const CartComentario = ()=>{
    return (
        <StyleCartComentarios>
            <div className="divDados">
                <span className="ftimg">SM</span>
                <StyledTitle $fontSize="three" $fontColor="gray600" className="nomeUser">Julia Lima</StyledTitle >
                < StyledTitle $fontSize="four" $fontColor="gray550" className="dias">há 4 dias</StyledTitle>
            </div>
            <div>
                <StyledTitle $fontSize="three" $fontColor="gray600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                    been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </StyledTitle>
            </div>
        </StyleCartComentarios>
    )
}