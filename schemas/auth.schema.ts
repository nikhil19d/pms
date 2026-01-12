import { z } from "zod"

const passwordSchema = z.string().min(8, "Password must be at least 8 characters")


const loginFields = {
  email: z.string().email("Invalid email"),
  password: passwordSchema,
  departments: z.enum(['management', 'admin', 'store', 'production', 'qc', 'dispatch', 'sales'])
}
export const loginSchema = z.object(loginFields)
export type LoginSchema = z.infer<typeof loginSchema>

export const registerSchema = z.object({
  ...loginFields,
  confirmPassword: passwordSchema
}).refine(data => data.password === data.confirmPassword, {
  path: ["confirmPassword", "password"],
  message: "password does not match"
})

export type RegisterSchema = z.infer<typeof registerSchema>
