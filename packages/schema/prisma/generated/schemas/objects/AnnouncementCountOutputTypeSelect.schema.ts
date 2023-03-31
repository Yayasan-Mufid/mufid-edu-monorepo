import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementCountOutputTypeSelect> = z
  .object({
    study_groups: z.boolean().optional(),
  })
  .strict();

export const AnnouncementCountOutputTypeSelectObjectSchema = Schema;
