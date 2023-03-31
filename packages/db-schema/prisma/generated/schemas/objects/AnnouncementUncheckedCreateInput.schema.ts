import { z } from 'zod';
import { StudyGroupAnnouncementUncheckedCreateNestedManyWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementUncheckedCreateNestedManyWithoutAnnouncementInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    created_by_id: z.string(),
    title: z.string(),
    text: z.string(),
    start_date: z.date(),
    end_date: z.date(),
    public: z.boolean().optional(),
    study_groups: z
      .lazy(
        () =>
          StudyGroupAnnouncementUncheckedCreateNestedManyWithoutAnnouncementInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AnnouncementUncheckedCreateInputObjectSchema = Schema;
