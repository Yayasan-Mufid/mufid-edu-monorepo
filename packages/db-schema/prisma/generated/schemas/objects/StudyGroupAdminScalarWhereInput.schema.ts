import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StudyGroupAdminScalarWhereInputObjectSchema),
        z.lazy(() => StudyGroupAdminScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StudyGroupAdminScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StudyGroupAdminScalarWhereInputObjectSchema),
        z.lazy(() => StudyGroupAdminScalarWhereInputObjectSchema).array(),
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

export const StudyGroupAdminScalarWhereInputObjectSchema = Schema;
