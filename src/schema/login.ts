import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().min(8,{message: 'Password must contain at least 8 character(s)'})
})

export default loginSchema;