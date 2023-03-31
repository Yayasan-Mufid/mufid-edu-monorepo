import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => StudyGroupAdminScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupAdminScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => StudyGroupAdminScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => StudyGroupAdminScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupAdminScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      study_group_id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      user_id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupAdminScalarWhereWithAggregatesInputObjectSchema = Schema;
