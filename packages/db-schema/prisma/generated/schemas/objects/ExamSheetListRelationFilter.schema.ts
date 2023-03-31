import { z } from 'zod';
import { ExamSheetWhereInputObjectSchema } from './ExamSheetWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetListRelationFilter> = z
  .object({
    every: z.lazy(() => ExamSheetWhereInputObjectSchema).optional(),
    some: z.lazy(() => ExamSheetWhereInputObjectSchema).optional(),
    none: z.lazy(() => ExamSheetWhereInputObjectSchema).optional(),
  })
  .strict();

export const ExamSheetListRelationFilterObjectSchema = Schema;
