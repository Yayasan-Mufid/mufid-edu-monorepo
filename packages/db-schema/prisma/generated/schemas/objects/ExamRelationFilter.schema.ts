import { z } from 'zod';
import { ExamWhereInputObjectSchema } from './ExamWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamRelationFilter> = z
  .object({
    is: z.lazy(() => ExamWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ExamWhereInputObjectSchema).optional(),
  })
  .strict();

export const ExamRelationFilterObjectSchema = Schema;
