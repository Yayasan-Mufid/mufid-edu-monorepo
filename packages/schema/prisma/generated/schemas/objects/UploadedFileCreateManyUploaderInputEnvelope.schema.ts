import { z } from 'zod';
import { UploadedFileCreateManyUploaderInputObjectSchema } from './UploadedFileCreateManyUploaderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadedFileCreateManyUploaderInputEnvelope> = z
  .object({
    data: z.lazy(() => UploadedFileCreateManyUploaderInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UploadedFileCreateManyUploaderInputEnvelopeObjectSchema = Schema;
