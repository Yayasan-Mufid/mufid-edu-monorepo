import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadedFileMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    path: z.literal(true).optional(),
    uploader_id: z.literal(true).optional(),
    uploaded_at: z.literal(true).optional(),
  })
  .strict();

export const UploadedFileMinAggregateInputObjectSchema = Schema;
