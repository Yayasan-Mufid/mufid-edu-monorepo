import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleItemOrderByWithRelationInputObjectSchema } from './ModuleItemOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusOrderByWithRelationInput> = z
  .object({
    module_item_id: z.lazy(() => SortOrderSchema).optional(),
    module_item: z
      .lazy(() => ModuleItemOrderByWithRelationInputObjectSchema)
      .optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ModuleItemStatusOrderByWithRelationInputObjectSchema = Schema;
