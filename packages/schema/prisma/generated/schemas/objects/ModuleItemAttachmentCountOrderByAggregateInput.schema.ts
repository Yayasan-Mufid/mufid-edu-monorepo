import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      module_item_id: z.lazy(() => SortOrderSchema).optional(),
      description: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      url: z.lazy(() => SortOrderSchema).optional(),
      seq: z.lazy(() => SortOrderSchema).optional(),
      mandatory: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ModuleItemAttachmentCountOrderByAggregateInputObjectSchema =
  Schema;
