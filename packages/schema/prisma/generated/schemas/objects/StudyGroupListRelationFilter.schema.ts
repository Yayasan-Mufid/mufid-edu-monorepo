import { z } from 'zod';
import { StudyGroupWhereInputObjectSchema } from './StudyGroupWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupListRelationFilter> = z
  .object({
    every: z.lazy(() => StudyGroupWhereInputObjectSchema).optional(),
    some: z.lazy(() => StudyGroupWhereInputObjectSchema).optional(),
    none: z.lazy(() => StudyGroupWhereInputObjectSchema).optional(),
  })
  .strict();

export const StudyGroupListRelationFilterObjectSchema = Schema;
