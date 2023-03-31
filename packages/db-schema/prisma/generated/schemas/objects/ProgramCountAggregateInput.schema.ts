import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    code: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    cover_img_url: z.literal(true).optional(),
    bg_img_url: z.literal(true).optional(),
    published: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ProgramCountAggregateInputObjectSchema = Schema;
