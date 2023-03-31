import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleItemOrderByWithRelationInputObjectSchema } from './ModuleItemOrderByWithRelationInput.schema';
import { ModuleItemAttachmentStatusOrderByRelationAggregateInputObjectSchema } from './ModuleItemAttachmentStatusOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    module_item_id: z.lazy(() => SortOrderSchema).optional(),
    module_item: z
      .lazy(() => ModuleItemOrderByWithRelationInputObjectSchema)
      .optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    seq: z.lazy(() => SortOrderSchema).optional(),
    mandatory: z.lazy(() => SortOrderSchema).optional(),
    user_status: z
      .lazy(
        () =>
          ModuleItemAttachmentStatusOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ModuleItemAttachmentOrderByWithRelationInputObjectSchema = Schema;
