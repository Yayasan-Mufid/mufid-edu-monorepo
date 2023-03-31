import { z } from 'zod';
import { StudyGroupExamCreateManyGroupInputObjectSchema } from './StudyGroupExamCreateManyGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamCreateManyGroupInputEnvelope> = z
  .object({
    data: z.lazy(() => StudyGroupExamCreateManyGroupInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const StudyGroupExamCreateManyGroupInputEnvelopeObjectSchema = Schema;
