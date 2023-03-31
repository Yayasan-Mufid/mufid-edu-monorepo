import { z } from 'zod';
import { ExamSheetItemCreateManySectionInputObjectSchema } from './ExamSheetItemCreateManySectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemCreateManySectionInputEnvelope> = z
  .object({
    data: z.lazy(() => ExamSheetItemCreateManySectionInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ExamSheetItemCreateManySectionInputEnvelopeObjectSchema = Schema;
