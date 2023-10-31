import { Footer } from "../../components/Footer"
import { HeaderHome } from "../../components/Headers/HeaderHome"
import ProductList from "../../components/ProductList"

export const Home=()=>{
    const teste = localStorage.getItem("@TOKEN")
    return(
        <div>
            <HeaderHome/>
            
            <Footer/>
        </div>
    )
}