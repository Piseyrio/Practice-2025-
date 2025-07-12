
import {z} from 'zod';


export const userSchema = z.object({
name: z.string().min(4,"Name must be at least 4"),
email: z.string().email("Wrong Email").min(4,"Email must be at least 4"),  
password: z.string().min(4,"Password must be at least 4"),
})

export type UserSchemaData = z.infer<typeof userSchema>