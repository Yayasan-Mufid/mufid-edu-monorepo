import { z } from 'zod';
import { ExamSheetCreateManyGraderInputObjectSchema } from './ExamSheetCreateManyGraderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetCreateManyGraderInputEnvelope> = z
  .object({
    data: z.lazy(() => ExamSheetCreateManyGraderInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ExamSheetCreateManyGraderInputEnvelopeObjectSchema = Schema;
