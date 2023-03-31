import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionMaxOrderByAggregateInput> = z
  .object({
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PermissionMaxOrderByAggregateInputObjectSchema = Schema;
