import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCreateManyInput> = z
  .object({
    id: z.string().optional(),
    program_id: z.string(),
    title: z.string(),
    code: z.string(),
    slug: z.string().optional().nullable(),
    description: z.string(),
    published: z.date().optional().nullable(),
    archived: z.boolean().optional(),
    seq: z.number(),
    cover_img_url: z.string().optional().nullable(),
    bg_img_url: z.string().optional().nullable(),
  })
  .strict();

export const ModuleCreateManyInputObjectSchema = Schema;
