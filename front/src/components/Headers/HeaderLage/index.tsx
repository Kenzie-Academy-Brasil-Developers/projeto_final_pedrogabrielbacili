import { StyledHeader, StyledTextDegrade } from "../HeaderHome/style"
import { StyledMenuHambuguer, StyledNameUser } from "./style"
import {AiOutlineMenu } from "react-icons/ai"

export const HeaderLage=()=>{
    return (
        <StyledHeader>
            <StyledTextDegrade>
                Motors <small className='shop'>shop</small>
            </StyledTextDegrade>
            <StyledNameUser>
                <img  src="../png/rickandmorty.png" alt="" />
                <span>Samuel Leao</span>
            </StyledNameUser>
            <StyledMenuHambuguer>
                <AiOutlineMenu/>
            </StyledMenuHambuguer>
        </StyledHeader>
    )
}