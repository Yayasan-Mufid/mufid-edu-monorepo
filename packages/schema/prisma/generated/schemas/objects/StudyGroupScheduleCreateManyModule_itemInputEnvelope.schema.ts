import { z } from 'zod';
import { StudyGroupScheduleCreateManyModule_itemInputObjectSchema } from './StudyGroupScheduleCreateManyModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleCreateManyModule_itemInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => StudyGroupScheduleCreateManyModule_itemInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const StudyGroupScheduleCreateManyModule_itemInputEnvelopeObjectSchema =
  Schema;
