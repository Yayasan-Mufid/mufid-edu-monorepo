import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupSumOrderByAggregateInput> = z
  .object({
    capacity: z.lazy(() => SortOrderSchema).optional(),
    invoice_amount: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const StudyGroupSumOrderByAggregateInputObjectSchema = Schema;
