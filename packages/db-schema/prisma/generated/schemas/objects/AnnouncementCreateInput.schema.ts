import { z } from 'zod';
import { UserCreateNestedOneWithoutCreated_announcementsInputObjectSchema } from './UserCreateNestedOneWithoutCreated_announcementsInput.schema';
import { StudyGroupAnnouncementCreateNestedManyWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementCreateNestedManyWithoutAnnouncementInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    text: z.string(),
    start_date: z.date(),
    end_date: z.date(),
    public: z.boolean().optional(),
    created_by: z.lazy(
      () => UserCreateNestedOneWithoutCreated_announcementsInputObjectSchema,
    ),
    study_groups: z
      .lazy(
        () =>
          StudyGroupAnnouncementCreateNestedManyWithoutAnnouncementInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AnnouncementCreateInputObjectSchema = Schema;
