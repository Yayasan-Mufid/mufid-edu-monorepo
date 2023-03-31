import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StudyGroupStudentScalarWhereInputObjectSchema),
        z.lazy(() => StudyGroupStudentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StudyGroupStudentScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StudyGroupStudentScalarWhereInputObjectSchema),
        z.lazy(() => StudyGroupStudentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    study_group_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const StudyGroupStudentScalarWhereInputObjectSchema = Schema;
