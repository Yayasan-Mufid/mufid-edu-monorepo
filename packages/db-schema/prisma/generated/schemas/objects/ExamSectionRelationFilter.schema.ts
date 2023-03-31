import { z } from 'zod';
import { ExamSectionWhereInputObjectSchema } from './ExamSectionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionRelationFilter> = z
  .object({
    is: z.lazy(() => ExamSectionWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ExamSectionWhereInputObjectSchema).optional(),
  })
  .strict();

export const ExamSectionRelationFilterObjectSchema = Schema;
