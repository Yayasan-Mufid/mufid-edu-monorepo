import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StudyGroupAnnouncementListRelationFilterObjectSchema } from './StudyGroupAnnouncementListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AnnouncementWhereInputObjectSchema),
        z.lazy(() => AnnouncementWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AnnouncementWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AnnouncementWhereInputObjectSchema),
        z.lazy(() => AnnouncementWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    created_by_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    created_by: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    text: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    start_date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    end_date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    public: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    study_groups: z
      .lazy(() => StudyGroupAnnouncementListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const AnnouncementWhereInputObjectSchema = Schema;
