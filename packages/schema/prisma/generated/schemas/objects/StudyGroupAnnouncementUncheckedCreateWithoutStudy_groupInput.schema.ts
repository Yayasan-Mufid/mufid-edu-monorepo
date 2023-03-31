import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementUncheckedCreateWithoutStudy_groupInput> =
  z
    .object({
      announcement_id: z.string(),
    })
    .strict();

export const StudyGroupAnnouncementUncheckedCreateWithoutStudy_groupInputObjectSchema =
  Schema;
