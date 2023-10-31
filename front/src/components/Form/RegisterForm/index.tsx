import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input";
import { RegisterData, schemaRegister } from "./validator";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyleRegister } from "./style";
import { StyledTitle } from "../../../styles/typography";
import { StyledButtonCSS } from "../../../styles/button";
import { useAuth } from "../../../hooks/useAuth";

export const RegisterForm = () => {
    const { registerUser } = useAuth();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        watch,
    } = useForm<RegisterData>({
        resolver: zodResolver(schemaRegister),
    });

    const submit :SubmitHandler<RegisterData>=async (formData)=>{
        registerUser(formData)
    }

    return (
        <StyleRegister>
            <form onSubmit={handleSubmit(submit)}>
                <Input
                    id="nome"
                    label="Nome"
                    placeholder="ex:Samuel Leao"
                    error={errors.nome}
                    {...register("nome")}
                />
                <Input
                    id="email"
                    label="Email"
                    placeholder="ex:samuel@gmail.com"
                    error={errors.email}
                    {...register("email")}
                />
                <Input
                    id="cpf"
                    label="CPF"
                    placeholder="000.000.000-00"
                    error={errors.cpf}
                    {...register("cpf")}
                />
                <Input
                    id="celular"
                    label="Celular"
                    placeholder="(000)00000-0000"
                    error={errors.celular}
                    {...register("celular")}
                />
                <Input
                    id="data_de_nascimento"
                    label="Data de nascimento"
                    placeholder="00/00/00"
                    error={errors.data_de_nascimento}
                    {...register("data_de_nascimento")}
                />
                <Input
                    id="descricao"
                    label="Descrição"
                    placeholder="Digitar descrição"
                    error={errors.descricao}
                    {...register("descricao")}
                />

                <StyledTitle $fontSize="three" $fontColor="black">
                    Informações de endereço
                </StyledTitle>
                <Input
                    id="cep"
                    label="CEP"
                    placeholder="00000.000"
                    error={errors.cep}
                    {...register("cep")}
                />
                <div className="styledEstAndCit">
                    <div className="estado">
                        <label htmlFor="">Estado</label>
                        <input
                            id="estado"
                            placeholder="Digitar Estado"
                            {...register("estado")}
                        />
                    </div>
                    <div className="cidade">
                        <label htmlFor="">Cidade</label>
                        <input
                            id="cidade"
                            placeholder="Digitar cidade"
                            {...register("cidade")}
                        />
                    </div>
                </div>
                <Input
                    id="rua"
                    label="Rua"
                    placeholder="Digitar rua"
                    error={errors.rua}
                    {...register("rua")}
                />
                <div className="styledNumeroAndComplemento">
                    <div className="numero">
                        <label htmlFor="">Numero</label>
                        <input
                            id="numero"
                            placeholder="Digitar numero"
                            {...register("numero")}
                        />
                    </div>
                    <div className="complemento">
                        <label htmlFor="complemento">Complemento</label>
                        <input
                            id="complemento"
                            placeholder="ex:apart 307"
                            {...register("complemento")}
                        />
                    </div>
                </div>
                <div className="buttonsTipoConta">
                    <StyledButtonCSS
                        type="button"
                        className={`choice-button${
                            watch("tipo_de_conta") === "comprador" ? "selected" : ""
                        }`}
                        onClick={() => setValue("tipo_de_conta", "comprador")}
                        $buttonSize="medium"
                        $buttonStyle="buttonTipoDeConta"
                        value="anunciante"
                    >
                        comprador
                    </StyledButtonCSS>
                    <StyledButtonCSS
                        type="button"
                        className={`choice-button${
                            watch("tipo_de_conta") === "anunciante" ? "selected" : ""
                        }`}
                        onClick={() => setValue("tipo_de_conta", "anunciante")}
                        $buttonSize="medium"
                        $buttonStyle="buttonTipoDeConta"
                        value="anunciante"
                    >
                        Anunciante
                    </StyledButtonCSS>
                </div>
                <Input
                    id="senha"
                    label="Senha"
                    placeholder="Digitar senha"
                    error={errors.senha}
                    {...register("senha")}
                />
                <Input
                    id="confirm"
                    label="Confirmar Senha"
                    placeholder="Digitar senha"
                    error={errors.confirm}
                    {...register("confirm")}
                />
                <StyledButtonCSS
                    type="submit"
                    className="buttonFinalizar"
                    $buttonSize="big"
                    $buttonStyle="buttonBigBlue"
                >
                    Finalizar cadastro
                </StyledButtonCSS>
            </form>
        </StyleRegister>
    );
};
