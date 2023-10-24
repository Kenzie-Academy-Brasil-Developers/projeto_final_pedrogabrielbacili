import { z } from "zod"

export const schema = z.object({
    email: z.string().email("deve ser um e-mail"),
    password: z.string().nonempty("senha é obrigatória")
})

export type LoginData = z.infer<typeof schema>