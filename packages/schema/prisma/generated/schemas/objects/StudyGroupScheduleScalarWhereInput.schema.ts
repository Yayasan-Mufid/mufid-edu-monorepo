import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StudyGroupScheduleScalarWhereInputObjectSchema),
        z.lazy(() => StudyGroupScheduleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StudyGroupScheduleScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StudyGroupScheduleScalarWhereInputObjectSchema),
        z.lazy(() => StudyGroupScheduleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    study_group_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    module_item_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const StudyGroupScheduleScalarWhereInputObjectSchema = Schema;
