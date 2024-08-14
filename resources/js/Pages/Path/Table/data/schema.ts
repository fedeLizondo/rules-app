import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
    id: z.string(),
    url: z.string(),
    type: z.string(),
    date: z.string(),
})

export type Rule = z.infer<typeof taskSchema>
