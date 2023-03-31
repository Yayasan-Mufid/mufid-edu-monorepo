import { z } from 'zod';
import { StudyGroupExamWhereInputObjectSchema } from './StudyGroupExamWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamRelationFilter> = z
  .object({
    is: z.lazy(() => StudyGroupExamWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => StudyGroupExamWhereInputObjectSchema).optional(),
  })
  .strict();

export const StudyGroupExamRelationFilterObjectSchema = Schema;
