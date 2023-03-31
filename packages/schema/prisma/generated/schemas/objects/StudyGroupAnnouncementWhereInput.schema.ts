import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { AnnouncementRelationFilterObjectSchema } from './AnnouncementRelationFilter.schema';
import { AnnouncementWhereInputObjectSchema } from './AnnouncementWhereInput.schema';
import { StudyGroupRelationFilterObjectSchema } from './StudyGroupRelationFilter.schema';
import { StudyGroupWhereInputObjectSchema } from './StudyGroupWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StudyGroupAnnouncementWhereInputObjectSchema),
        z.lazy(() => StudyGroupAnnouncementWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StudyGroupAnnouncementWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StudyGroupAnnouncementWhereInputObjectSchema),
        z.lazy(() => StudyGroupAnnouncementWhereInputObjectSchema).array(),
      ])
      .optional(),
    announcement_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    announcement: z
      .union([
        z.lazy(() => AnnouncementRelationFilterObjectSchema),
        z.lazy(() => AnnouncementWhereInputObjectSchema),
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
  })
  .strict();

export const StudyGroupAnnouncementWhereInputObjectSchema = Schema;
