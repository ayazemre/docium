import z from "zod";

export const baseSchema = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.string().datetime().default(new Date().toISOString()).optional(),
  updatedAt: z.string().datetime(new Date().toISOString()).optional(),
});
