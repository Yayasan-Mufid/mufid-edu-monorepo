import { z } from 'zod';
import { ExamSheetCreateManyUserInputObjectSchema } from './ExamSheetCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => ExamSheetCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ExamSheetCreateManyUserInputEnvelopeObjectSchema = Schema;
