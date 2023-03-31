import { z } from 'zod';
import { StudyGroupStudentCreateManyStudy_groupInputObjectSchema } from './StudyGroupStudentCreateManyStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentCreateManyStudy_groupInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => StudyGroupStudentCreateManyStudy_groupInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const StudyGroupStudentCreateManyStudy_groupInputEnvelopeObjectSchema =
  Schema;
