import { z } from "zod"

const signSchema = z
      .object({
            name: z.string().refine(value => value.trim().split(/\s+/).length >= 2, { message: 'Full name is required (first and last name)' }),
            email: z.string().email({ message: 'Email is required' }),
            password: z.string().min(8,{message: 'Password must contain at least 8 character(s)'}),
            confirmPassword: z.string().min(1,{ message: 'Confirm password is required'})
      })
      .refine( data => data.password === data.confirmPassword,{
        message: 'Password do not match',
        path: ['confirmPassword']
      })

export default signSchema;
