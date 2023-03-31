import { z } from 'zod';
import { StudyGroupStudentCreateManyUserInputObjectSchema } from './StudyGroupStudentCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentCreateManyUserInputEnvelope> = z
  .object({
    data: z
      .lazy(() => StudyGroupStudentCreateManyUserInputObjectSchema)
      .array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const StudyGroupStudentCreateManyUserInputEnvelopeObjectSchema = Schema;
