import { z } from 'zod';
import { ExamSectionWhereInputObjectSchema } from './ExamSectionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionListRelationFilter> = z
  .object({
    every: z.lazy(() => ExamSectionWhereInputObjectSchema).optional(),
    some: z.lazy(() => ExamSectionWhereInputObjectSchema).optional(),
    none: z.lazy(() => ExamSectionWhereInputObjectSchema).optional(),
  })
  .strict();

export const ExamSectionListRelationFilterObjectSchema = Schema;
