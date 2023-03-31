import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () =>
              StudyGroupAnnouncementScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAnnouncementScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () =>
            StudyGroupAnnouncementScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () =>
              StudyGroupAnnouncementScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAnnouncementScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      announcement_id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      study_group_id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupAnnouncementScalarWhereWithAggregatesInputObjectSchema =
  Schema;
