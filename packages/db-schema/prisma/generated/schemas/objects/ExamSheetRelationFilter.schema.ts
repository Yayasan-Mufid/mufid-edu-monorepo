import { z } from 'zod';
import { ExamSheetWhereInputObjectSchema } from './ExamSheetWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetRelationFilter> = z
  .object({
    is: z.lazy(() => ExamSheetWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ExamSheetWhereInputObjectSchema).optional(),
  })
  .strict();

export const ExamSheetRelationFilterObjectSchema = Schema;
