import { z } from 'zod';
import { ExamSheetItemCreateManyQuestionInputObjectSchema } from './ExamSheetItemCreateManyQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemCreateManyQuestionInputEnvelope> = z
  .object({
    data: z
      .lazy(() => ExamSheetItemCreateManyQuestionInputObjectSchema)
      .array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ExamSheetItemCreateManyQuestionInputEnvelopeObjectSchema = Schema;
