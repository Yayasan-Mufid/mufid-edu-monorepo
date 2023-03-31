import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentAvgAggregateInputType> = z
  .object({
    seq: z.literal(true).optional(),
  })
  .strict();

export const ModuleItemAttachmentAvgAggregateInputObjectSchema = Schema;
