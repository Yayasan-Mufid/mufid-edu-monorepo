import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadedFileCreateWithoutUploaderInput> = z
  .object({
    id: z.string().optional(),
    path: z.string(),
    uploaded_at: z.date().optional(),
  })
  .strict();

export const UploadedFileCreateWithoutUploaderInputObjectSchema = Schema;
