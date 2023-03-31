import { z } from 'zod';
import { UserCreateNestedOneWithoutCreated_announcementsInputObjectSchema } from './UserCreateNestedOneWithoutCreated_announcementsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementCreateWithoutStudy_groupsInput> = z
  .object({
    id: z.string().optional(),
    created_by: z.lazy(
      () => UserCreateNestedOneWithoutCreated_announcementsInputObjectSchema,
    ),
    title: z.string(),
    text: z.string(),
    start_date: z.date(),
    end_date: z.date(),
    public: z.boolean().optional(),
  })
  .strict();

export const AnnouncementCreateWithoutStudy_groupsInputObjectSchema = Schema;
