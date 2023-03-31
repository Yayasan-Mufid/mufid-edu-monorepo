import { z } from 'zod';
import { ExamSectionQuestionCreateManyQuestionInputObjectSchema } from './ExamSectionQuestionCreateManyQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionCreateManyQuestionInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => ExamSectionQuestionCreateManyQuestionInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ExamSectionQuestionCreateManyQuestionInputEnvelopeObjectSchema =
  Schema;
