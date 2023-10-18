import { StyledTitle } from "../../styles/typography"
import { StyledProductCard } from "./style"

export const ProductCard = ()=>{
    return (
        <main>
            <StyledProductCard>
                <img src="../png/transferir.jpg" alt="Gol" />
                <StyledTitle $fontSize="two" fontColor='gray'>Product title stays here - max 1 line</StyledTitle>
                <StyledTitle $fontSize="three" fontColor="gray600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</StyledTitle>
                <div className="imagemUsuario">
                    <img  src="../png/rickandmorty.png" alt="" />
                    <StyledTitle className="anunciante" $fontSize="three" fontColor="gray600">Anuciante</StyledTitle>
                </div>
                <div className="dadosNumericos">
                    <div className="anoKM">
                        <span className="km">0 KM</span>
                        <span className="ano">2019</span>
                    </div>
                    <div>
                        <span className="preco">R$ 20.000,00</span>
                    </div>
                </div>
            </StyledProductCard>
        </main>
    )
}