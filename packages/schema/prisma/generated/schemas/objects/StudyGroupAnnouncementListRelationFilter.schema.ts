import { z } from 'zod';
import { StudyGroupAnnouncementWhereInputObjectSchema } from './StudyGroupAnnouncementWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementListRelationFilter> = z
  .object({
    every: z
      .lazy(() => StudyGroupAnnouncementWhereInputObjectSchema)
      .optional(),
    some: z.lazy(() => StudyGroupAnnouncementWhereInputObjectSchema).optional(),
    none: z.lazy(() => StudyGroupAnnouncementWhereInputObjectSchema).optional(),
  })
  .strict();

export const StudyGroupAnnouncementListRelationFilterObjectSchema = Schema;
