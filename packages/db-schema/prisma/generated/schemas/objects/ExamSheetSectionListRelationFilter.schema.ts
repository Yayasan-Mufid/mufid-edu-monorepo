import { z } from 'zod';
import { ExamSheetSectionWhereInputObjectSchema } from './ExamSheetSectionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionListRelationFilter> = z
  .object({
    every: z.lazy(() => ExamSheetSectionWhereInputObjectSchema).optional(),
    some: z.lazy(() => ExamSheetSectionWhereInputObjectSchema).optional(),
    none: z.lazy(() => ExamSheetSectionWhereInputObjectSchema).optional(),
  })
  .strict();

export const ExamSheetSectionListRelationFilterObjectSchema = Schema;
