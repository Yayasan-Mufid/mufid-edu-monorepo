import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateManyModuleInput> = z
  .object({
    id: z.string().optional(),
    parent_item_id: z.string().optional().nullable(),
    is_root: z.boolean().optional().nullable(),
    title: z.string(),
    code: z.string(),
    text: z.string(),
    seq: z.number().optional(),
    is_quiz: z.boolean().optional(),
    mandatory: z.boolean().optional(),
    cover_img_url: z.string().optional().nullable(),
    bg_img_url: z.string().optional().nullable(),
  })
  .strict();

export const ModuleItemCreateManyModuleInputObjectSchema = Schema;
