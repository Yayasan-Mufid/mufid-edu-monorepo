import { z } from 'zod';
import { AnnouncementSelectObjectSchema } from './AnnouncementSelect.schema';
import { AnnouncementIncludeObjectSchema } from './AnnouncementInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementArgs> = z
  .object({
    select: z.lazy(() => AnnouncementSelectObjectSchema).optional(),
    include: z.lazy(() => AnnouncementIncludeObjectSchema).optional(),
  })
  .strict();

export const AnnouncementArgsObjectSchema = Schema;
