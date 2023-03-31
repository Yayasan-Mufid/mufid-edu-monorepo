import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleItemAttachmentStatusCountOrderByAggregateInputObjectSchema } from './ModuleItemAttachmentStatusCountOrderByAggregateInput.schema';
import { ModuleItemAttachmentStatusMaxOrderByAggregateInputObjectSchema } from './ModuleItemAttachmentStatusMaxOrderByAggregateInput.schema';
import { ModuleItemAttachmentStatusMinOrderByAggregateInputObjectSchema } from './ModuleItemAttachmentStatusMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusOrderByWithAggregationInput> =
  z
    .object({
      attachment_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(
          () =>
            ModuleItemAttachmentStatusCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _max: z
        .lazy(
          () => ModuleItemAttachmentStatusMaxOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _min: z
        .lazy(
          () => ModuleItemAttachmentStatusMinOrderByAggregateInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ModuleItemAttachmentStatusOrderByWithAggregationInputObjectSchema =
  Schema;
