import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusMinAggregateInputType> =
  z
    .object({
      attachment_id: z.literal(true).optional(),
      user_id: z.literal(true).optional(),
      status: z.literal(true).optional(),
      updated_at: z.literal(true).optional(),
    })
    .strict();

export const ModuleItemAttachmentStatusMinAggregateInputObjectSchema = Schema;
