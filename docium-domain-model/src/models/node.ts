import * as z from "zod";
import { baseSchema } from "./base";

export const dociumNodeSchema = baseSchema.extend({
  nextNodeId: z.string().uuid().optional(),
  type: z.enum(["richText", "image", "video"]).optional(),
  data: z.string().optional(),
  metadata: z.record(z.string(), z.string()).optional(),
});

export type DociumNode = z.infer<typeof dociumNodeSchema>;
