import z from "zod";
import { baseSchema } from "./base";

export const dociumNodeSchema = baseSchema.extend({
  nextNodeId: z.string().uuid(),
  type: z.enum(["richText", "image", "video"]),
  data: z.string(),
  metadata: z.record(z.string(), z.string()),
});

export type DociumNode = z.infer<typeof dociumNodeSchema>;
