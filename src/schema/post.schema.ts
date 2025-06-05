import { z } from 'zod'

export const postSchema = z.object({
  title: z.string().min(5, { message: 'Title is required' }),
  price: z.coerce.number().min(1, { message: 'Price is required' }),
  address: z.string().min(1, { message: 'Address is required' }),
  content: z.string().min(5, { message: 'Description is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  bedrooms: z.coerce.number().min(1, { message: 'Bedroom number is required' }),
  bathrooms: z.coerce.number().min(1, { message: 'Bathroom number is required' }),
  type: z.enum(['rent', 'buy'], { message: 'Type is required' }),
  property: z.enum(['apartment', 'house', 'condo', 'land'], {
    message: 'Property type is required',
  }),
  utilities: z.enum(['owner', 'tenant', 'shared'], { message: 'Utilities policy is required' }),
})
