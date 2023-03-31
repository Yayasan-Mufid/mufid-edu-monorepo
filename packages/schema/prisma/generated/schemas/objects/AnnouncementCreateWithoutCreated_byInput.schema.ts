import { z } from 'zod';
import { StudyGroupAnnouncementCreateNestedManyWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementCreateNestedManyWithoutAnnouncementInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementCreateWithoutCreated_byInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    text: z.string(),
    start_date: z.date(),
    end_date: z.date(),
    public: z.boolean().optional(),
    study_groups: z
      .lazy(
        () =>
          StudyGroupAnnouncementCreateNestedManyWithoutAnnouncementInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AnnouncementCreateWithoutCreated_byInputObjectSchema = Schema;
