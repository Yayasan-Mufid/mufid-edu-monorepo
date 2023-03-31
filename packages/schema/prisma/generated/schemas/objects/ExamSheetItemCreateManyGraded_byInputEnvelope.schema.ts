import { z } from 'zod';
import { ExamSheetItemCreateManyGraded_byInputObjectSchema } from './ExamSheetItemCreateManyGraded_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemCreateManyGraded_byInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => ExamSheetItemCreateManyGraded_byInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ExamSheetItemCreateManyGraded_byInputEnvelopeObjectSchema = Schema;
