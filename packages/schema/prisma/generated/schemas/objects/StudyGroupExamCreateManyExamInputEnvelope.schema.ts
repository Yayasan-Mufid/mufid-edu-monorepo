import { z } from 'zod';
import { StudyGroupExamCreateManyExamInputObjectSchema } from './StudyGroupExamCreateManyExamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamCreateManyExamInputEnvelope> = z
  .object({
    data: z.lazy(() => StudyGroupExamCreateManyExamInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const StudyGroupExamCreateManyExamInputEnvelopeObjectSchema = Schema;
