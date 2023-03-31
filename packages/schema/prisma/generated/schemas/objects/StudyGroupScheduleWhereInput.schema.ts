import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StudyGroupRelationFilterObjectSchema } from './StudyGroupRelationFilter.schema';
import { StudyGroupWhereInputObjectSchema } from './StudyGroupWhereInput.schema';
import { ModuleItemRelationFilterObjectSchema } from './ModuleItemRelationFilter.schema';
import { ModuleItemWhereInputObjectSchema } from './ModuleItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StudyGroupScheduleWhereInputObjectSchema),
        z.lazy(() => StudyGroupScheduleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StudyGroupScheduleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StudyGroupScheduleWhereInputObjectSchema),
        z.lazy(() => StudyGroupScheduleWhereInputObjectSchema).array(),
      ])
      .optional(),
    study_group_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    study_group: z
      .union([
        z.lazy(() => StudyGroupRelationFilterObjectSchema),
        z.lazy(() => StudyGroupWhereInputObjectSchema),
      ])
      .optional(),
    module_item_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    module_item: z
      .union([
        z.lazy(() => ModuleItemRelationFilterObjectSchema),
        z.lazy(() => ModuleItemWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const StudyGroupScheduleWhereInputObjectSchema = Schema;
