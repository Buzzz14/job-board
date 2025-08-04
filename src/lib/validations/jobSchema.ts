import * as z from 'zod'

export const jobFormSchema = z.object({
  title: z.string().min(2, 'Title is required'),
  company: z.string().min(2, 'Company is required'),
  location: z.string().min(2, 'Location is required'),
  description: z.string().min(10, 'Description is too short'),
  remote: z.boolean().optional(),
})

export type JobFormValues = z.infer<typeof jobFormSchema>
