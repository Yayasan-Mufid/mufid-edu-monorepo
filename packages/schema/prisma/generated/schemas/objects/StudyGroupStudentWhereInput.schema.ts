import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StudyGroupRelationFilterObjectSchema } from './StudyGroupRelationFilter.schema';
import { StudyGroupWhereInputObjectSchema } from './StudyGroupWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StudyGroupStudentWhereInputObjectSchema),
        z.lazy(() => StudyGroupStudentWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StudyGroupStudentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StudyGroupStudentWhereInputObjectSchema),
        z.lazy(() => StudyGroupStudentWhereInputObjectSchema).array(),
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
    user_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const StudyGroupStudentWhereInputObjectSchema = Schema;
