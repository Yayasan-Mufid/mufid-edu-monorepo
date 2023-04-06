import { z } from "zod";

export const basicModuleSchema = {
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  published: z.string().datetime().nullable().optional(),
  cover_img_url: z.string().nullable().optional(),
  bg_img_url: z.string().nullable().optional(),
  seq: z.number(),
  admins: z.array(z.string()).optional(),
};

export const createModuleSchema = {
  ...basicModuleSchema,
  program_id: z.string(),
  code: z.string(),
};

export const editModuleSchema = {
  ...basicModuleSchema,
  id: z.string(),
};
