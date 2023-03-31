import { z } from 'zod';
import { StudyGroupCreateNestedOneWithoutScheduleInputObjectSchema } from './StudyGroupCreateNestedOneWithoutScheduleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleCreateWithoutModule_itemInput> =
  z
    .object({
      study_group: z.lazy(
        () => StudyGroupCreateNestedOneWithoutScheduleInputObjectSchema,
      ),
    })
    .strict();

export const StudyGroupScheduleCreateWithoutModule_itemInputObjectSchema =
  Schema;
