import { z } from 'zod';
import { AnnouncementCountOutputTypeSelectObjectSchema } from './AnnouncementCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => AnnouncementCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict();

export const AnnouncementCountOutputTypeArgsObjectSchema = Schema;
