import { z } from 'zod';
import { StudyGroupExamWhereInputObjectSchema } from './StudyGroupExamWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamListRelationFilter> = z
  .object({
    every: z.lazy(() => StudyGroupExamWhereInputObjectSchema).optional(),
    some: z.lazy(() => StudyGroupExamWhereInputObjectSchema).optional(),
    none: z.lazy(() => StudyGroupExamWhereInputObjectSchema).optional(),
  })
  .strict();

export const StudyGroupExamListRelationFilterObjectSchema = Schema;
