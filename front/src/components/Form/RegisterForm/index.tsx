import { zodResolver } from "@hookform/resolvers/zod"
import Input from "../Input"
import { RegisterData, schemaRegister } from "./validator"
import { useForm } from "react-hook-form"
import { StyleRegister } from "./style"
import { StyledTitle } from "../../../styles/typography"
import { StyledButtonCSS } from "../../../styles/button"

export const RegisterForm=()=>{
    const {register, handleSubmit}=useForm<RegisterData>({
        resolver: zodResolver(schemaRegister)
    })

    return (
        <StyleRegister>
            <form action="">
                <Input id="nome" label="Nome" placeholder="ex:Samuel Leao" {...register("nome")}/>
                <Input id="email" label="Email" placeholder="ex:samuel@gmail.com" {...register("email")}/>
                <Input id="cpf" label="CPF" placeholder="000.000.000-00" {...register("cpf")}/>
                <Input id="celular" label="Celular" placeholder="(000)00000-0000" {...register("celular")}/>
                <Input id="data_de_nascimento" label="Data de nascimento" placeholder="00/00/00" {...register("data_de_nascimento")}/>
                <Input id="descricao" label="Descrição" placeholder="Digitar descrição" {...register("descricao")}/>

                <StyledTitle $fontSize="three" fontColor="black">Informações de endereço</StyledTitle> 
                <Input id="cep" label="CEP" placeholder="00000.000" {...register("cep")}/>
                <div className="styledEstAndCit">
                    <div className="estado">
                        <label htmlFor="">Estado</label>
                        <input id="estado" placeholder="Digitar Estado" {...register("estado")}/>
                    </div>
                    <div className="cidade">
                        <label htmlFor="">Cidade</label>
                        <input id="cidade" placeholder="Digitar cidade" {...register("cidade")}/>
                    </div>
                </div>
                <Input id="rua" label="Rua" placeholder="Digitar rua" {...register("rua")}/>
                <div className="styledNumeroAndComplemento">
                    <div className="numero">
                        <label htmlFor="">Numero</label>
                        <input id="numero" placeholder="Digitar numero" {...register("numero")}/>
                    </div>
                    <div className="complemento">
                        <label htmlFor="complemento">Complemento</label>
                        <input id="complemento" placeholder="ex:apart 307" {...register("complemento")}/>
                    </div>
                </div>
                <div className="buttonsTipoConta">
                    <StyledButtonCSS $buttonSize="medium" $buttonStyle="buttonTipoDeConta" value="comprador">Comprador</StyledButtonCSS>
                    <StyledButtonCSS $buttonSize="medium" $buttonStyle="buttonTipoDeConta" value="anunciante">Anunciante</StyledButtonCSS>
                </div>
                <Input id="senha" label="Senha" placeholder="Digitar senha" {...register("senha")}/>
                <Input id="confirm" label="Confirmar Senha" placeholder="Digitar senha" {...register("confirm")}/>
                <StyledButtonCSS className="buttonFinalizar" $buttonSize="big" $buttonStyle="buttonBigBlue">Finalizar cadastro</StyledButtonCSS>
            </form>
        </StyleRegister>
    )
}