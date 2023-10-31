import { useContext } from "react"
import { CardContext } from "../../providers/CartContext"
import { ProductCard } from "./ProductCard"

const ProductList=()=>{
    const {filterProducts}=useContext(CardContext)
    return (
        <div>
            {filterProducts.map((product)=>{
                return(
                    <ProductCard 
                        key={product.id}
                        id={product.id}
                        nameCar={product.nameCar}
                        img={product.img}
                        description={product.description}
                        imgUser={product.imgUser}
                        nameUser={product.nameUser}
                        km={product.km}
                        ano={product.ano}
                        preco={product.preco}
                    />
                )
            })}
        </div>
    )
}
export default ProductList;