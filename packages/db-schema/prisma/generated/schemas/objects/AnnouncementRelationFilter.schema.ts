import { z } from 'zod';
import { AnnouncementWhereInputObjectSchema } from './AnnouncementWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementRelationFilter> = z
  .object({
    is: z.lazy(() => AnnouncementWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => AnnouncementWhereInputObjectSchema).optional(),
  })
  .strict();

export const AnnouncementRelationFilterObjectSchema = Schema;
