import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    module_id: z.literal(true).optional(),
    parent_item_id: z.literal(true).optional(),
    is_root: z.literal(true).optional(),
    title: z.literal(true).optional(),
    code: z.literal(true).optional(),
    text: z.literal(true).optional(),
    seq: z.literal(true).optional(),
    is_quiz: z.literal(true).optional(),
    mandatory: z.literal(true).optional(),
    cover_img_url: z.literal(true).optional(),
    bg_img_url: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ModuleItemCountAggregateInputObjectSchema = Schema;
