import { z } from 'zod';
import { ExamWhereInputObjectSchema } from './ExamWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamListRelationFilter> = z
  .object({
    every: z.lazy(() => ExamWhereInputObjectSchema).optional(),
    some: z.lazy(() => ExamWhereInputObjectSchema).optional(),
    none: z.lazy(() => ExamWhereInputObjectSchema).optional(),
  })
  .strict();

export const ExamListRelationFilterObjectSchema = Schema;
