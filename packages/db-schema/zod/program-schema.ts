import { z } from "zod";

const basicProgramSchema = {
  title: z.string(),
  description: z.string(),
  published: z
    .string()
    .datetime()
    .transform(function (v) {
      return new Date(v);
    }),
  bg_img_url: z.string().url().optional(),
  cover_img_url: z.string().url().optional(),
  admins: z.array(z.string()).optional(),
};

export const createProgramSchema = {
  ...basicProgramSchema,
  code: z.string(),
};

export const editProgramSchema = {
  ...basicProgramSchema,
  id: z.string(),
};
