import React, { createContext, useEffect, useState } from "react"
import { api } from "../services/api";

interface ICardProvider {
    children: React.ReactNode;
}

export interface IProducts {
    id:string;
    marca:string;
    modelo:string;
    ano:string;
    combustivel:string;
    quilometragem:number;
    cor:string;
    preco_fipe:number;
    preco:string;
    descricao:string;
    img:string;
    nameCar:string;
    imgUser:string;
    nameUser:string;
    km:string;
    description:string;
}
interface IProductsContext {
    filterProducts:IProducts[];
    setFilterProducts:(value:React.SetStateAction<IProducts[]>) => void;
    productsList:IProducts[];
    setProductsList:(value:React.SetStateAction<IProducts[]>) => void;
}

export const CardContext = createContext({} as IProductsContext);

export const CardProvider =({children}: ICardProvider)=>{
    const [filterProducts, setFilterProducts] = useState<IProducts[]>([])
    const [productsList, setProductsList]=useState<IProducts[]>([])

    useEffect(()  =>{
        const products = async () =>{
            const token = localStorage.getItem("@TOKEN");
            try{
                const {data} = await api.get<IProducts[]>("/anouncements", {
                    headers:{
                        Authorization:`Bearer ${token}`,
                    },
                });
                console.log(data)
                setProductsList(data)
            }catch(error){
                console.log(error)
        }
        }
        products();
    }, [])

    return (
        <CardContext.Provider
            value={{
                filterProducts, setFilterProducts, productsList, setProductsList,
            }}>
                {children}
        </CardContext.Provider>
    )
}