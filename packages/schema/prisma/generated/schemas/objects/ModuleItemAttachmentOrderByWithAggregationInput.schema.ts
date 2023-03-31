import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleItemAttachmentCountOrderByAggregateInputObjectSchema } from './ModuleItemAttachmentCountOrderByAggregateInput.schema';
import { ModuleItemAttachmentAvgOrderByAggregateInputObjectSchema } from './ModuleItemAttachmentAvgOrderByAggregateInput.schema';
import { ModuleItemAttachmentMaxOrderByAggregateInputObjectSchema } from './ModuleItemAttachmentMaxOrderByAggregateInput.schema';
import { ModuleItemAttachmentMinOrderByAggregateInputObjectSchema } from './ModuleItemAttachmentMinOrderByAggregateInput.schema';
import { ModuleItemAttachmentSumOrderByAggregateInputObjectSchema } from './ModuleItemAttachmentSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      module_item_id: z.lazy(() => SortOrderSchema).optional(),
      description: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      url: z.lazy(() => SortOrderSchema).optional(),
      seq: z.lazy(() => SortOrderSchema).optional(),
      mandatory: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => ModuleItemAttachmentCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => ModuleItemAttachmentAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => ModuleItemAttachmentMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => ModuleItemAttachmentMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => ModuleItemAttachmentSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const ModuleItemAttachmentOrderByWithAggregationInputObjectSchema =
  Schema;
