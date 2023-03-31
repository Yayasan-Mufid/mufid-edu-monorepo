import { z } from 'zod';
import { ExamSectionQuestionCreateManySectionInputObjectSchema } from './ExamSectionQuestionCreateManySectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionCreateManySectionInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => ExamSectionQuestionCreateManySectionInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ExamSectionQuestionCreateManySectionInputEnvelopeObjectSchema =
  Schema;
