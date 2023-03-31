import { z } from 'zod';
import { StudyGroupScheduleWhereInputObjectSchema } from './StudyGroupScheduleWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleListRelationFilter> = z
  .object({
    every: z.lazy(() => StudyGroupScheduleWhereInputObjectSchema).optional(),
    some: z.lazy(() => StudyGroupScheduleWhereInputObjectSchema).optional(),
    none: z.lazy(() => StudyGroupScheduleWhereInputObjectSchema).optional(),
  })
  .strict();

export const StudyGroupScheduleListRelationFilterObjectSchema = Schema;
