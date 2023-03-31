import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleSumOrderByAggregateInput> = z
  .object({
    seq: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ModuleSumOrderByAggregateInputObjectSchema = Schema;
