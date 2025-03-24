import { z } from "zod";

export const giveawaySchema = z.object({
  creator_id: z.string(),
  title: z.string().min(3).max(100),
  description: z.string().optional(),
  prize: z.string().min(3),
  deadline: z.preprocess(
    (arg) => (typeof arg === "string" || typeof arg === "number" ? new Date(arg) : arg),
    z.date()
  ),
  participants: z.array(z.string()).default([]),
  winner: z.string().nullable().optional(), // Allow `null` or `undefined`
  createdAt: z.preprocess(() => new Date(), z.date()), // Ensures correct default value
});
