import { z } from "zod"

export const productSchema = z.object({
  model: z.enum(['m2', 'm3', 'm4', 'm5', 'm2 pro']),
  color: z.enum(['black', 'green', 'blue', 'gray', 'maroon', 'white']),
  chassis: z.string(),
  controller: z.string(),
  motor: z.string(),
  // status: z.enum(['pass', 'fail']),
  // date: z.date()
})

export type ProductSchema = z.infer<typeof productSchema>
