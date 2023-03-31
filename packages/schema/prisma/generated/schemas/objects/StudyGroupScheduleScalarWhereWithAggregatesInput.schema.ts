import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => StudyGroupScheduleScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupScheduleScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () => StudyGroupScheduleScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => StudyGroupScheduleScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupScheduleScalarWhereWithAggregatesInputObjectSchema,
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
      module_item_id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupScheduleScalarWhereWithAggregatesInputObjectSchema =
  Schema;
