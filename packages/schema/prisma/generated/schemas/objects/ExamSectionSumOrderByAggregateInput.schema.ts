import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionSumOrderByAggregateInput> = z
  .object({
    nb_of_questions: z.lazy(() => SortOrderSchema).optional(),
    seq: z.lazy(() => SortOrderSchema).optional(),
    default_point: z.lazy(() => SortOrderSchema).optional(),
    weight: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ExamSectionSumOrderByAggregateInputObjectSchema = Schema;
