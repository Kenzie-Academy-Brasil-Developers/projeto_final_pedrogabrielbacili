import { StyledTitle } from "../../../styles/typography"
import { StyledProductCard } from "./style"

interface IProductCart{
    id: string;
    img:string;
    nameCar:string;
    description:string;
    imgUser:string;
    nameUser:string;
    km:string;
    ano:string;
    preco:string;
}

export const ProductCard = ({id, img, nameCar, description, imgUser, nameUser, km, ano, preco}:IProductCart)=>{
    return (
        <main>
            <StyledProductCard key={id}>
                <img src={img} alt={nameCar} />
                <StyledTitle $fontSize="two" $fontColor='gray'>{nameCar}</StyledTitle>
                <StyledTitle $fontSize="three" $fontColor="gray600">{description}</StyledTitle>
                <div className="imagemUsuario">
                    <img  src={imgUser} alt={nameUser} />
                    <StyledTitle className="anunciante" $fontSize="three" $fontColor="gray600">{nameUser}</StyledTitle>
                </div>
                <div className="dadosNumericos">
                    <div className="anoKM">
                        <span className="km">{km}</span>
                        <span className="ano">{ano}</span>
                    </div>
                    <div>
                        <span className="preco">{preco}</span>
                    </div>
                </div>
            </StyledProductCard>
        </main>
    )
}