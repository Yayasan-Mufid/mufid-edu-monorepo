import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StudyGroupAnnouncementScalarWhereInputObjectSchema),
        z
          .lazy(() => StudyGroupAnnouncementScalarWhereInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StudyGroupAnnouncementScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StudyGroupAnnouncementScalarWhereInputObjectSchema),
        z
          .lazy(() => StudyGroupAnnouncementScalarWhereInputObjectSchema)
          .array(),
      ])
      .optional(),
    announcement_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    study_group_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const StudyGroupAnnouncementScalarWhereInputObjectSchema = Schema;
