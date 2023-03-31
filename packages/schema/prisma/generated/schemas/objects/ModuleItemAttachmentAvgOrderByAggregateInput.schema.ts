import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentAvgOrderByAggregateInput> = z
  .object({
    seq: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ModuleItemAttachmentAvgOrderByAggregateInputObjectSchema = Schema;
