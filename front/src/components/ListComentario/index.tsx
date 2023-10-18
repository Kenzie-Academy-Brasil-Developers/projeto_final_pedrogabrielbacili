import { CartComentario } from "./CartComentario"
import { StyledTitle } from "../../styles/typography"
import { StyleCartComentario } from "./style"

export const ListComentario=()=>{
    return (
        <StyleCartComentario>
            <StyledTitle $fontSize="two" fontColor="gray">Comentários</StyledTitle>
            <CartComentario/>
        </StyleCartComentario>
    )
}