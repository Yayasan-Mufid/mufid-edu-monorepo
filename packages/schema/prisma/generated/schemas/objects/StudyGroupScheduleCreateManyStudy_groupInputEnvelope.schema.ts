import { z } from 'zod';
import { StudyGroupScheduleCreateManyStudy_groupInputObjectSchema } from './StudyGroupScheduleCreateManyStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleCreateManyStudy_groupInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => StudyGroupScheduleCreateManyStudy_groupInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const StudyGroupScheduleCreateManyStudy_groupInputEnvelopeObjectSchema =
  Schema;
