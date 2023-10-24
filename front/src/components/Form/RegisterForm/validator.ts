import { z} from "zod";

export const schemaRegister=z.object({
    nome:z.string().nonempty("Nome obrigatório!"),
    email:z.string().email("Dese ser um email valido!"),
    cpf:z.string().nonempty("CPF obrigatório!").min(11, "O CPF deve ter 11 caracter!"),
    celular:z.string().nonempty("o celular é obrigatório!"),
    data_de_nascimento:z.string().nonempty("data de nascimento obrigatório!"),
    descricao:z.string().optional(),
    cep:z.string().nonempty("cep Obrigatório"),
    estado:z.string().nonempty("estado obrigatório!"),
    cidade:z.string().nonempty("cidade obrigatório!"),
    rua:z.string().nonempty("rua obrigatório"),
    numero:z.number().positive(),
    complemento:z.string().optional(),
    tipo_de_conta:z.enum(["anunciante", "comprador"]),
    senha:z.string().min(8, "a senha prescisar conter pelo menos 8 caracteres")
    .regex(/(?=.*?[A-Z])/, "é necessario uma letra maiscula")
    .regex(/(?=.*?[a-z])/, "é necessario pelo menos uma letra minuscula")
    .regex(/(?=.*?[0-9])/, "é necessario pelo menos um numero"),
    confirm: z.string().min(1, "confirmar a senha é obrigatório")
}).refine(({senha, confirm})=>confirm === senha,{
    message: "A confirmação e a senha precisam corresponder",
    path: ["confirm"],
})

export type RegisterData = z.infer<typeof schemaRegister> 
