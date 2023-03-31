import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    module_item_id: z.literal(true).optional(),
    description: z.literal(true).optional(),
    type: z.literal(true).optional(),
    url: z.literal(true).optional(),
    seq: z.literal(true).optional(),
    mandatory: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ModuleItemAttachmentCountAggregateInputObjectSchema = Schema;
