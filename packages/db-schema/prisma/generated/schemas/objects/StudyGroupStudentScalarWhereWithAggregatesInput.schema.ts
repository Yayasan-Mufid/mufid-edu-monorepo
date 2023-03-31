import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => StudyGroupStudentScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupStudentScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => StudyGroupStudentScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => StudyGroupStudentScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupStudentScalarWhereWithAggregatesInputObjectSchema,
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

export const StudyGroupStudentScalarWhereWithAggregatesInputObjectSchema =
  Schema;
