import { z } from 'zod';
import { StudyGroupAnnouncementUncheckedCreateNestedManyWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementUncheckedCreateNestedManyWithoutAnnouncementInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementUncheckedCreateWithoutCreated_byInput> =
  z
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
            StudyGroupAnnouncementUncheckedCreateNestedManyWithoutAnnouncementInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const AnnouncementUncheckedCreateWithoutCreated_byInputObjectSchema =
  Schema;
