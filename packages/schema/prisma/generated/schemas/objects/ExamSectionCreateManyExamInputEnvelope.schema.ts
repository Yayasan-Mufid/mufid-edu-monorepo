import { z } from 'zod';
import { ExamSectionCreateManyExamInputObjectSchema } from './ExamSectionCreateManyExamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionCreateManyExamInputEnvelope> = z
  .object({
    data: z.lazy(() => ExamSectionCreateManyExamInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ExamSectionCreateManyExamInputEnvelopeObjectSchema = Schema;
