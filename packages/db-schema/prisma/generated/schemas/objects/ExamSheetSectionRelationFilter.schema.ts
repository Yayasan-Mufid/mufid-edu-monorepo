import { z } from 'zod';
import { ExamSheetSectionWhereInputObjectSchema } from './ExamSheetSectionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionRelationFilter> = z
  .object({
    is: z.lazy(() => ExamSheetSectionWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ExamSheetSectionWhereInputObjectSchema).optional(),
  })
  .strict();

export const ExamSheetSectionRelationFilterObjectSchema = Schema;
