import { z } from 'zod';
import { ExamSheetItemWhereInputObjectSchema } from './ExamSheetItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemListRelationFilter> = z
  .object({
    every: z.lazy(() => ExamSheetItemWhereInputObjectSchema).optional(),
    some: z.lazy(() => ExamSheetItemWhereInputObjectSchema).optional(),
    none: z.lazy(() => ExamSheetItemWhereInputObjectSchema).optional(),
  })
  .strict();

export const ExamSheetItemListRelationFilterObjectSchema = Schema;
