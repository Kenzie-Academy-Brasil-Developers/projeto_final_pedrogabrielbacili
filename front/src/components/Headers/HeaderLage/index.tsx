import { StyledHeader, StyledTextDegrade } from "../HeaderHome/style"
import {  StyledNameUser } from "./style"


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
        </StyledHeader>
    )
}